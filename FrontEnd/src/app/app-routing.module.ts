import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/routing/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: './auth/auth.module#AuthModule' },
  // { path: 'coordinador', loadChildren: './coordinator/coordinator.module#CoordinatorModule', canActivate: [AuthGuard] },
  { path: 'coordinador', loadChildren: './coordinator/coordinator.module#CoordinatorModule' },
  // { path: 'empresa', loadChildren: './company/company.module#CompanyModule', canActivate: [AuthGuard] },
  { path: 'empresa', loadChildren: './company/company.module#CompanyModule' },
  // { path: 'estudiante', loadChildren: './student/student.module#StudentModule', canActivate: [AuthGuard]  }
  { path: 'estudiante', loadChildren: './student/student.module#StudentModule'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
