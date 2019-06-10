import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event-type',
  templateUrl: './create-event-type.component.html',
  styleUrls: ['./create-event-type.component.scss']
})
export class CreateEventTypeComponent implements OnInit {

  eventTypeForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.eventTypeForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {

  }

}
