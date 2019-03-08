import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';



const routes: Routes = [
  { path: '', component: LayoutComponent , children: [
      { path: 'eventos', children: [
          { path: '', component: EventsComponent },
          { path: ':id', component: EventComponent }
        ] }

    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
