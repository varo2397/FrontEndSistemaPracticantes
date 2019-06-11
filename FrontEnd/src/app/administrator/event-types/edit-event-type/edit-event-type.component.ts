import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTypesService } from '../../../core/http/eventTypes/event-types.service';
import { EventType } from '../../../interfaces/eventType';

@Component({
  selector: 'app-edit-event-type',
  templateUrl: './edit-event-type.component.html',
  styleUrls: ['./edit-event-type.component.scss']
})
export class EditEventTypeComponent implements OnInit {

  editEventTypeForm: FormGroup;
  eventTypeID: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private eventTypeService: EventTypesService) { }

  ngOnInit() {
    this.eventTypeID = this.route.snapshot.paramMap.get('id');
    this.createForm();
    this.getEventType();
  }

  getEventType() {
    this.eventTypeService.getEventType(this.eventTypeID.toString()).subscribe(response => {
      this.editEventTypeForm.controls['name'].setValue(response.data.name);
      this.editEventTypeForm.controls['description'].setValue(response.data.description);
    });
  }

  onSubmit() {
    if (this.editEventTypeForm.valid && this.editEventTypeForm.touched) {
      const eventType: EventType = <EventType> {
        id: parseInt(this.eventTypeID, 10),
        name: this.editEventTypeForm.controls['name'].value,
        description: this.editEventTypeForm.controls['description'].value
      };
      this.eventTypeService.updateEventType(eventType).subscribe(response => {
        this.router.navigate(['/administrador/tipos-evento']);
      });
    }
  }

  createForm() {
    this.editEventTypeForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }

}
