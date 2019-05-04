import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/routing/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'coordinador', loadChildren: './coordinator/coordinator.module#CoordinatorModule', canLoad: [AuthGuard] },
  { path: 'empresa', loadChildren: './company/company.module#CompanyModule', canLoad: [AuthGuard] },
  { path: 'estudiante', loadChildren: './student/student.module#StudentModule', canLoad: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
