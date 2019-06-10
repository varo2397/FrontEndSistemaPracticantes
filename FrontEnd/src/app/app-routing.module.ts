import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/routing/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: 'coordinador', loadChildren: './coordinator/coordinator.module#CoordinatorModule', canActivate: [AuthGuard] },
  { path: 'coordinador', loadChildren: () => import('./coordinator/coordinator.module').then(m => m.CoordinatorModule) },
  // { path: 'empresa', loadChildren: './company/company.module#CompanyModule', canActivate: [AuthGuard] },
  { path: 'empresa', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  // { path: 'estudiante', loadChildren: './student/student.module#StudentModule', canActivate: [AuthGuard]  }
  { path: 'estudiante', loadChildren: () => import('./student/student.module').then(m => m.StudentModule)  },
  { path: 'administrador', loadChildren: () => import('./administrator/administrator.module').then(m => m.AdministratorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
