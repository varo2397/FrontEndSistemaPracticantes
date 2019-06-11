import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../core/http/auth/login.service';
import { Router } from '@angular/router';
import { Login } from '../../interfaces/login';
import { LoginToken } from '../../interfaces/loginToken';
import { Store } from '@ngrx/store';
import * as Auth from '../../store/auth/auth.actions';
import * as fromAuth from '../../store/auth/auth.reducer';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  login: LoginToken;
  errors: string;
  httpObserver;

  constructor(private loginService: LoginService,
              private router: Router,
              private store: Store<fromAuth.State>) { }

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
      this.httpObserver = this.loginService.login(loginInfo).pipe(take(1)).subscribe(response => {
        this.login = <LoginToken>response.data;
        this.store.dispatch(new Auth.SetLoginToken(this.login));

        switch (this.login.person_type) {
          case 'student':
            this.router.navigate(['estudiante']);
            break;
          case 'coordinator':
            this.router.navigate(['coordinador']);
            break;
          case 'company':
            this.router.navigate(['empresa']);
            break;
          case 'super-user':
            this.router.navigate(['administrador']);
            break;
          default:
            return null;
        }
        this.httpObserver.unsubscribe();
        // }
        // else {
        //   this.error = 'Correo o contraseña incorrectos';
        // }
      });

    }
  }

  ngOnDestroy(): void {
    if (this.httpObserver !== undefined) {
      this.httpObserver.unsubscribe();
    }
  }

}
