import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared.module';

import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ApproveStudentsComponent } from './students/approve-students/approve-students.component';
import { StudentsComponent } from './students/students.component';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventComponent } from './events/event/event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { CompanyEventInfoComponent } from './events/company-event-info/company-event-info.component';
import { ActitivyScheduleComponent } from './events/edit-event/actitivy-schedule/actitivy-schedule.component';


@NgModule({
  declarations: [
    SidenavComponent,
    LayoutComponent,
    ApproveStudentsComponent,
    StudentsComponent,
    EventsComponent,
    CreateEventComponent,
    EventComponent,
    EditEventComponent,
    CompanyEventInfoComponent,
    ActitivyScheduleComponent,
  ],
  imports: [
    MaterialModule,
    CoordinatorRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    DragDropModule
  ]
})

export class CoordinatorModule {}
