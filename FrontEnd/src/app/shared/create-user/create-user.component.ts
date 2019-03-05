import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      'password': new FormControl(null, [Validators.required]),
      'confirmPassword': new FormControl(null, [
        Validators.required,
        this.confirmPasswordValidator.bind(this)
      ])
    });
  }

  confirmPasswordValidator(control: FormControl) {
    if (this.userForm !== undefined) {
      const password = this.userForm.get('password').value;
      const confirmPassword = control.value;

      if (password !== confirmPassword) {
        return { 'passwordInvalid': true };
      }
      return null;
    }
  }

}
