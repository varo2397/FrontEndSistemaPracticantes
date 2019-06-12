import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { EndInternshipComponent } from './evaluations/end-internship/end-internship.component';
import { TeacherComponent } from './evaluations/teacher/teacher.component';



const routes: Routes = [
  { path: '', component: LayoutComponent , children: [
      { path: 'eventos', children:
          [
            { path: '', component: EventsComponent },
            { path: ':id', component: EventComponent }
          ]
      },
      {
        path: 'evaluaciones', children:
          [
            { path: 'fin-practica', component: EndInternshipComponent },
            { path: 'profesor-asesor', component: TeacherComponent }
          ]
      }

    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
