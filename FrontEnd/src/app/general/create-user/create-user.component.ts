import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  formUser: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formUser = new FormGroup({
      'userName': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, Validators.required),
      'confirmPassword': new FormControl(null, [Validators.required,
        this.validatePassword.bind(this)])
    });
  }

  validatePassword(control : FormControl) {
    if(this.formUser !== undefined){
      const password = this.formUser.get('password').value;
      const confirmPassword = control.value;
      if(password !== confirmPassword){
        return { 'contraseñaNoIgual': true };
      }
      return null;
    }
    return null;

  }

}
