import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';

const routes: Routes = [
  { path: '', children: [
      { path: '', component: LoginComponent },
      { path: 'registro-estudiante', component: RegisterStudentComponent },
      { path: 'registro-empresa', component: RegisterCompanyComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
