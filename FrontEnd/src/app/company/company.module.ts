import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CompanyRoutingModule } from './company-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { EventsComponent } from './events/events.component';
import { SharedModule } from '../shared/shared.module';
import { EventComponent } from './events/event/event.component';
import { TalkEventComponent } from './events/talk-event/talk-event.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    CompanyRoutingModule,
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    SidenavComponent,
    EventsComponent,
    EventComponent,
    TalkEventComponent
  ]
})

export class CompanyModule {}