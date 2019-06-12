import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/routing/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'coordinador', loadChildren: () => import('./coordinator/coordinator.module').then(m => m.CoordinatorModule), canActivate: [AuthGuard] },
  { path: 'empresa', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule), canActivate: [AuthGuard] },
  { path: 'estudiante', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'administrador', loadChildren: () => import('./administrator/administrator.module').then(m => m.AdministratorModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
