import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from './login/login.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterStudentComponent,
    RegisterCompanyComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule
  ]
})

export class AuthModule {}
