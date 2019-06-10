import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-career',
  templateUrl: './create-career.component.html',
  styleUrls: ['./create-career.component.scss']
})
export class CreateCareerComponent implements OnInit {

  careerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.careerForm = new FormGroup({
      'career': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {

  }

}
