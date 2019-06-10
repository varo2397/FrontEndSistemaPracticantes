import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-event-type',
  templateUrl: './edit-event-type.component.html',
  styleUrls: ['./edit-event-type.component.scss']
})
export class EditEventTypeComponent implements OnInit {

  editEventTypeForm: FormGroup;
  eventTypeID: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventTypeID = this.route.snapshot.paramMap.get('id');
    this.createForm();
  }

  onSubmit() {

  }

  createForm() {
    this.editEventTypeForm = new FormGroup({
      'name': new FormControl('algo', Validators.required),
      'description': new FormControl('algo1', Validators.required)
    });
  }

}
