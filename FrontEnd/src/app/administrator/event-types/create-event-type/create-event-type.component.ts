import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventTypesService } from '../../../core/http/eventTypes/event-types.service';
import { EventType } from '../../../interfaces/eventType';

@Component({
  selector: 'app-create-event-type',
  templateUrl: './create-event-type.component.html',
  styleUrls: ['./create-event-type.component.scss']
})
export class CreateEventTypeComponent implements OnInit {

  eventTypeForm: FormGroup;

  constructor(private router: Router,
              private eventTypeService: EventTypesService) { }

  ngOnInit() {
    this.eventTypeForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.eventTypeForm.valid && this.eventTypeForm.touched) {
      const eventType: EventType = <EventType> {
        name: this.eventTypeForm.controls['name'].value,
        description: this.eventTypeForm.controls['description'].value
      };
      this.eventTypeService.createEventType(eventType).subscribe(response => {
        this.router.navigate(['/administrador/tipos-evento']);
      });
    }
  }

}
