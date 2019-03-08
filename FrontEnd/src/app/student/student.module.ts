import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    StudentRoutingModule
  ],
  declarations: [
    LayoutComponent,
    SidenavComponent,
    EventsComponent,
    EventComponent
  ]
})

export class StudentModule {}
