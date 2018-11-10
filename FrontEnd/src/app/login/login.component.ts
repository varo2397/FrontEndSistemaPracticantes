import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  error: string;

  constructor(private router: Router, private _user: UserService) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      'nombreUsuario': new FormControl(null, [Validators.required]),
      'contrasena': new FormControl(null, Validators.required)
    });

  }

  onSubmit(){
    
  }

}
