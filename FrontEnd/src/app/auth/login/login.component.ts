import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../core/http/auth/login.service';
import { Router } from '@angular/router';
import { Login } from '../../interfaces/login';
import { LoginToken } from '../../interfaces/loginToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: LoginToken;
  error: string;

  constructor(private _login: LoginService, private _router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid && this.loginForm.touched) {
      const loginInfo: Login = <Login> {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
      };
      this._login.login(loginInfo).subscribe(data => {
        console.log(data);
        // if (data.error !== null) {
          this.login = <LoginToken>data.data;

          switch (this.login.person_type) {
            case 'student':
              this._router.navigate(['estudiante']);
              break;
            case 'coordinator':
              this._router.navigate(['coordinador']);
              break;
            case 'company':
              this._router.navigate(['empresa']);
              break;
            default:
              return null;
          }
        // }
        // else {
        //   this.error = 'Correo o contraseña incorrectos';
        // }
      });

    }
  }

}
