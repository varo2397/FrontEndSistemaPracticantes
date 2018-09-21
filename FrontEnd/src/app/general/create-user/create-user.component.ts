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
      'nombreDeUsuario': new FormControl(null, [Validators.required]),
      'contraseña': new FormControl(null, Validators.required),
      'confirmarContraseña': new FormControl(null, [Validators.required,
        this.validatePassword.bind(this)])
    });
  }

  validatePassword(control : FormControl) {
    if(this.formUser !== undefined){
      const contraseña = this.formUser.get('contraseña').value;
      const confirmarContraseña = control.value;
      if(contraseña !== confirmarContraseña){
        return { 'contraseñaNoIgual': true };
      }
      return null;
    }
    return null;

  }

}
