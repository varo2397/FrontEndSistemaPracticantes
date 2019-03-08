import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'coordinador', loadChildren: './coordinator/coordinator.module#CoordinatorModule' },
  { path: 'empresa', loadChildren: './company/company.module#CompanyModule' },
  { path: 'estudiante', loadChildren: './student/student.module#StudentModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
