import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  error: string;

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      'nombreUsuario': new FormControl(null, [Validators.required]),
      'contrasena': new FormControl(null, Validators.required)
    });

  }

}
