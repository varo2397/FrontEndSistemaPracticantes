import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {

  personForm: FormGroup;
  emailControl: string;
  phoneNumberControl: string;

  constructor() { }

  ngOnInit() {
    this.emailControl = 'emails';
    this.phoneNumberControl = 'phoneNumbers';
    this.personForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'firstLastName': new FormControl(null, [Validators.required]),
      'secondLastName': new FormControl(null, [Validators.required]),
      'id': new FormControl(null, [Validators.required, Validators.max(999999999), Validators.min(100000000)]),
      'gender': new FormControl(null, Validators.required),
      'birthdate': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, Validators.required)
    });
  }

}
