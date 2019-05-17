import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', children: [
      { path: '', component: LoginComponent },
      { path: 'registro-estudiante', component: RegisterStudentComponent },
      { path: 'registro-empresa', component: RegisterCompanyComponent },
      { path: 'cambiar-contraseña', component: ForgotPasswordComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
