import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-semester',
  templateUrl: './edit-semester.component.html',
  styleUrls: ['./edit-semester.component.scss']
})
export class EditSemesterComponent implements OnInit {

  editEventTypeForm: FormGroup;
  eventTypeID: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventTypeID = this.route.snapshot.paramMap.get('id');
    this.createForm();
  }

  createForm() {
    this.editEventTypeForm = new FormGroup({
      'semester': new FormControl( null, Validators.required),
      'start': new FormControl(new Date(), Validators.required),
      'end': new FormControl(null, [Validators.required, this.endSemesterValidator.bind(this)])
    });
  }

  onSubmit() {

  }

  endSemesterValidator(control: FormControl) {
    if (this.editEventTypeForm !== undefined) {
      const startSemester = this.editEventTypeForm.get('start').value;
      const endSemester = control.value;

      if (startSemester > endSemester) {
        return { 'endSemesterWrong': true };
      }
    }
    return null;
  }

}
