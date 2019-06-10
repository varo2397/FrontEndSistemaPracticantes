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
      'semester': new FormControl(null, Validators.required),
      'start': new FormControl(null, Validators.required),
      'end': new FormControl(null, [Validators.required, this.endSemesterValidator.bind(this)])
    });
  }

  onSubmit() {

  }

  endSemesterValidator(control: FormControl) {
    if (this.eventTypeForm !== undefined) {
      const startSemester = this.eventTypeForm.get('start').value;
      const endSemester = control.value;

      if (startSemester > endSemester) {
        return { 'endSemesterWrong': true };
      }
    }
    return null;
  }

}
