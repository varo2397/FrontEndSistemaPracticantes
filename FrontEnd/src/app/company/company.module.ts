import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CompanyRoutingModule } from './company-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { EventsComponent } from './events/events.component';
import { SharedModule } from '../shared/shared.module';
import { EventComponent } from './events/event/event.component';
import { TalkEventComponent } from './events/talk-event/talk-event.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    CompanyRoutingModule,
    SharedModule,
    DragDropModule,
    FormsModule
  ],
  declarations: [
    LayoutComponent,
    SidenavComponent,
    EventsComponent,
    EventComponent,
    TalkEventComponent
  ],
  entryComponents: [
    TalkEventComponent
  ]
})

export class CompanyModule {}
