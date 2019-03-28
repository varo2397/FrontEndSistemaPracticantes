import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {People} from "../../interfaces/people";

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {

  personForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.personForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'firstLastName': new FormControl(null, [Validators.required]),
      'secondLastName': new FormControl(null, [Validators.required]),
      'id': new FormControl(null, [Validators.required, Validators.max(999999999), Validators.min(100000000)]),
      'gender': new FormControl(null, Validators.required),
      'birthdate': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.max(99999999), Validators.min(10000000)])
    });
  }

  getFormValues(): People {

    const person: People = <People> {
      name: this.personForm.get('name').value,
      lastName: this.personForm.get('firstLastName').value,
      secondLastName: this.personForm.get('secondLastName').value,
      id: this.personForm.get('id').value,
      gender_id: this.personForm.get('gender').value,
      telephone: this.personForm.get('phoneNumber').value,
      birthday: this.personForm.get('birthdate').value.toString()
    };

    return person;
  }

}
