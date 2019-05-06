import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { LayoutComponent } from './layout/layout.component';
import { EventComponent } from './events/event/event.component';
import { SitesComponent } from './sites/sites.component';
import { SendCareerRequestComponent } from './sites/send-career-request/send-career-request.component';

const routes: Routes = [
  { path: '', component: LayoutComponent , children: [
      { path: 'eventos', children:
          [
            { path: '', component: EventsComponent },
            { path: ':id', component: EventComponent }
          ]
      },
      { path: 'sedes', children:
          [
            { path: '', component: SitesComponent },
            { path: 'enviarSolicitud', component: SendCareerRequestComponent }
          ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
