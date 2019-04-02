import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {People} from "../../interfaces/people";
import {GendersService} from '../../core/http/genders/genders.service';
import {Gender} from '../../interfaces/gender';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {

  personForm: FormGroup;
  genders: Gender[];
  constructor(private gendersService: GendersService) { }

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
    this.getGenders();
  }

  getFormValues(): People {

    const date = this.personForm.get('birthdate').value;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const parsedDate = year + '-' + month + '-' + day;

    const person: People = <People> {
      name: this.personForm.get('name').value,
      lastName: this.personForm.get('firstLastName').value,
      secondLastName: this.personForm.get('secondLastName').value,
      id: this.personForm.get('id').value,
      gender_id: this.personForm.get('gender').value,
      telephone: this.personForm.get('phoneNumber').value,
      birthday:parsedDate
    };

    return person;
  }

  getGenders() {
    this.gendersService.getGenders().subscribe(response => {
      this.genders = <Gender[]>response;
    });
  }

}
