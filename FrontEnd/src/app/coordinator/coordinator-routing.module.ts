import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { ApproveStudentsComponent } from './students/approve-students/approve-students.component';
import { StudentsComponent } from './students/students.component';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventComponent } from './events/event/event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { ActitivyScheduleComponent } from './events/edit-event/actitivy-schedule/actitivy-schedule.component';
import { CompaniesComponent } from './companies/companies.component';
import { ApproveCompaniesComponent } from './companies/approve-companies/approve-companies.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CreateTeacherComponent } from './teachers/create-teacher/create-teacher.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'estudiantes', children: [
          { path: '', component: StudentsComponent },
          { path: 'aprobar-estudiantes', component: ApproveStudentsComponent }
        ]
      },
      {
        path: 'eventos', children: [
          { path: '', component: EventsComponent },
          { path: 'crear-evento', component: CreateEventComponent },
          { path: ':id', component: EventComponent },
          { path: ':id/editar', component: EditEventComponent },
          { path: ':id/editar/horarioActividades', component: ActitivyScheduleComponent }
        ]
      },
      {
        path: 'empresas', children: [
          { path: '', component: CompaniesComponent },
          { path: 'aprobar-empresas', component: ApproveCompaniesComponent },
        ]
      },
      {
        path: 'profesores', children: [
          { path: '', component: TeachersComponent },
          { path: 'crear-profesor', component: CreateTeacherComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }
