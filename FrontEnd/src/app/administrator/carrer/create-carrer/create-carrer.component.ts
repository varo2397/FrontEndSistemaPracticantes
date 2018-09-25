import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-carrer',
  templateUrl: './create-carrer.component.html',
  styleUrls: ['./create-carrer.component.css']
})
export class CreateCarrerComponent implements OnInit {

  formCarrer: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formCarrer = new FormGroup({
      'carrerName': new FormControl(null, [Validators.required]),
      'school': new FormControl(null, Validators.required)
    });
  }

}
