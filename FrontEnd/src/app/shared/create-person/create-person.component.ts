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
      'phoneNumbers': new FormArray([this.formControlBuilder(this.phoneNumberControl)]),
      'emails': new FormArray([this.formControlBuilder(this.emailControl)])
    });
  }

  formControlBuilder(controlType: string): FormControl {
    if (controlType === this.phoneNumberControl) {
      return new FormControl(null, [
          Validators.required,
          Validators.max(99999999),
          Validators.min(10000000),
          this.duplicatedValidator.bind(this, this.phoneNumberControl)
        ]
      );
    }
    else {
      return new FormControl(null, [
        Validators.required,
        Validators.email,
        this.duplicatedValidator.bind(this, this.emailControl)
      ]);
    }
  }

  addFormControl(controlType: string) {
    const newFormControl = this.formControlBuilder(controlType);
    const controlArray = <FormArray>this.personForm.get(controlType);
    controlArray.push(newFormControl);
  }

  deleteFormControl(controlType: string, index: number) {
    const controlArray = <FormArray>this.personForm.get(controlType);
    if (controlArray.length > 1) {
      controlArray.removeAt(index);
    }
  }

  duplicatedValidator( controlType: string, control: FormControl) {
    if (this.personForm !== undefined && <FormArray>this.personForm.get(controlType).length > 1) {
      const controlArray = <FormArray>this.personForm.get(controlType);
      const controlValue = control.value;
      let duplicatedAmount = 0;
      for (let i = 0; i < controlArray.length; i++) {
        if (controlArray.at(i).value === controlValue) duplicatedAmount++;
        if (duplicatedAmount === 2) return { 'duplicated': true };
      }
    }
  }
}
