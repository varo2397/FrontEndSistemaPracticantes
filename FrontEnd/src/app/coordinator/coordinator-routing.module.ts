import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ApproveStudentsComponent } from './students/approve-students/approve-students.component';
import { StudentsComponent } from './students/students.component';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './events/create-event/create-event.component';

const routes: Routes = [
  { path: '', component: LayoutComponent , children: [
      { path: 'estudiantes', children: [
          { path: '', component: StudentsComponent },
          { path: 'aprobar-estudiantes', component: ApproveStudentsComponent }
        ] },
      { path: 'eventos', children: [
          { path: '', component: EventsComponent },
          { path: 'crear-evento', component: CreateEventComponent }
        ]}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule {}
