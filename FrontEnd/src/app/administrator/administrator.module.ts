import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SemestersComponent } from './semesters/semesters.component';
import { CreateSemesterComponent } from './semesters/create-semester/create-semester.component';
import { EditSemesterComponent } from './semesters/edit-semester/edit-semester.component';
import { CareersComponent } from './careers/careers.component';
import { CreateCareerComponent } from './careers/create-career/create-career.component';
import { EditCareerComponent } from './careers/edit-career/edit-career.component';
import { SitesComponent } from './sites/sites.component';
import { CreateSiteComponent } from './sites/create-site/create-site.component';
import { EditSiteComponent } from './sites/edit-site/edit-site.component';
import { EventTypesComponent } from './event-types/event-types.component';
import { CreateEventTypeComponent } from './event-types/create-event-type/create-event-type.component';
import { EditEventTypeComponent } from './event-types/edit-event-type/edit-event-type.component';
import { CoordinatorsComponent } from './coordinators/coordinators.component';
import { CreateCoordinatorComponent } from './coordinators/create-coordinator/create-coordinator.component';
import { AdministratorsComponent } from './administrators/administrators.component';
import { CreateAdministratorComponent } from './administrators/create-administrator/create-administrator.component';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { CoordinatorInfoComponent } from './coordinators/create-coordinator/coordinator-info/coordinator-info.component';


@NgModule({
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    SemestersComponent,
    CreateSemesterComponent,
    EditSemesterComponent,
    CareersComponent,
    CreateCareerComponent,
    EditCareerComponent,
    SitesComponent,
    CreateSiteComponent,
    EditSiteComponent,
    EventTypesComponent,
    CreateEventTypeComponent,
    EditEventTypeComponent,
    CoordinatorsComponent,
    CreateCoordinatorComponent,
    AdministratorsComponent,
    CreateAdministratorComponent,
    LayoutComponent,
    SidenavComponent,
    CoordinatorInfoComponent
  ]
})

export class AdministratorModule {}
