import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventTypesService } from '../../core/http/eventTypes/event-types.service';
import { EventType } from '../../interfaces/eventType';

@Component({
  selector: 'app-event-types',
  templateUrl: './event-types.component.html',
  styleUrls: ['./event-types.component.scss']
})
export class EventTypesComponent implements OnInit {

  eventTypes: EventType[];

  constructor(private eventTypesService: EventTypesService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getEventTypes();
  }

  getEventTypes() {
    this.eventTypesService.getEventTypes().subscribe(response => {
      this.eventTypes = response.data;
    });
  }

  deleteEventType(eventTypeID: number) {
    this.eventTypesService.deleteEventType(eventTypeID.toString()).subscribe(response => {
      if (response.data === 'Success') {
        this.getEventTypes();
      } else {
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this.snackBar.open('No se pudo borrar el tipo de evento', 'Cerrar', {
      duration: 5000
    });
  }
}
