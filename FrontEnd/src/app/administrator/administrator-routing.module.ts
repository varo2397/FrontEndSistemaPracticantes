import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdministratorsComponent } from './administrators/administrators.component';
import { CreateAdministratorComponent } from './administrators/create-administrator/create-administrator.component';
import { CreateCareerComponent } from './careers/create-career/create-career.component';
import { CareersComponent } from './careers/careers.component';
import { EditCareerComponent } from './careers/edit-career/edit-career.component';
import { CreateCoordinatorComponent } from './coordinators/create-coordinator/create-coordinator.component';
import { CoordinatorsComponent } from './coordinators/coordinators.component';
import { EventTypesComponent } from './event-types/event-types.component';
import { CreateEventTypeComponent } from './event-types/create-event-type/create-event-type.component';
import { EditEventTypeComponent } from './event-types/edit-event-type/edit-event-type.component';
import { SemestersComponent } from './semesters/semesters.component';
import { CreateSemesterComponent } from './semesters/create-semester/create-semester.component';
import { EditSemesterComponent } from './semesters/edit-semester/edit-semester.component';
import { SitesComponent } from './sites/sites.component';
import { CreateSiteComponent } from './sites/create-site/create-site.component';
import { EditSiteComponent } from './sites/edit-site/edit-site.component';

const routes: Routes = [
  { path: '', component: LayoutComponent , children: [
      { path: 'administradores', children:
          [
            { path: '', component: AdministratorsComponent },
            { path: 'crear-administrador', component: CreateAdministratorComponent }
          ]
      },
      { path: 'carreras', children:
          [
            { path: '', component: CareersComponent },
            { path: 'crear-carrera', component: CreateCareerComponent },
            { path: ':id/editar', component: EditCareerComponent }
          ]
      },
      { path: 'coordinadores', children:
          [
            { path: '', component: CoordinatorsComponent },
            { path: 'crear-coordinador', component: CreateCoordinatorComponent }
          ]
      },
      { path: 'tipos-evento', children:
          [
            { path: '', component: EventTypesComponent },
            { path: 'crear-tipo-evento', component: CreateEventTypeComponent },
            { path: ':id/editar', component: EditEventTypeComponent }
          ]
      },
      { path: 'semestres', children:
          [
            { path: '', component: SemestersComponent },
            { path: 'crear-semestre', component: CreateSemesterComponent },
            { path: ':id/editar', component: EditSemesterComponent }
          ]
      },
      { path: 'sedes', children:
          [
            { path: '', component: SitesComponent },
            { path: 'crear-sede', component: CreateSiteComponent },
            { path: ':id/editar', component: EditSiteComponent }
          ]
      }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdministratorRoutingModule {}

