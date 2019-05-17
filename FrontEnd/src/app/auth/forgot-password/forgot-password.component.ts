import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'newPassword': new FormControl(null, [Validators.required]),
      'confirmNewPassword': new FormControl(null, [Validators.required])
    });
  }

}
