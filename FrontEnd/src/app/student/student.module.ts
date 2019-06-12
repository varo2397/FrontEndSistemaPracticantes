import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { EndInternshipComponent } from './evaluations/end-internship/end-internship.component';
import { TeacherComponent } from './evaluations/teacher/teacher.component';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    StudentRoutingModule,
    FormsModule
  ],
  declarations: [
    LayoutComponent,
    SidenavComponent,
    EventsComponent,
    EventComponent,
    EndInternshipComponent,
    TeacherComponent
  ]
})

export class StudentModule {}
