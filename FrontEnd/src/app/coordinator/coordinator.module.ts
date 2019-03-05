import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';

import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { HeaderComponent } from './layout/header/header.component';
import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApproveStudentsComponent } from './students/approve-students/approve-students.component';
import { StudentsComponent } from './students/students.component';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './events/create-event/create-event.component';


@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    LayoutComponent,
    ApproveStudentsComponent,
    StudentsComponent,
    EventsComponent,
    CreateEventComponent,
  ],
  imports: [
    MaterialModule,
    CoordinatorRoutingModule,
    FlexLayoutModule
  ]
})

export class CoordinatorModule {}
