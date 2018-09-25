import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-semester',
  templateUrl: './create-semester.component.html',
  styleUrls: ['./create-semester.component.css']
})
export class CreateSemesterComponent implements OnInit {

  formSemester: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formSemester = new FormGroup({
      'year': new FormControl(null, [Validators.required]),
      'semesterNumber': new FormControl(null, Validators.required)
    });
  }

}
