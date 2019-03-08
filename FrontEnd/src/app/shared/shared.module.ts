import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CreatePersonComponent } from './create-person/create-person.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ShowEventComponent } from './show-event/show-event.component';
import { ShowEventsComponent } from './show-events/show-events.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CreatePersonComponent,
    CreateStudentComponent,
    CreateUserComponent,
    CreateCompanyComponent,
    ShowEventComponent,
    ShowEventsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    CreatePersonComponent,
    CreateStudentComponent,
    CreateUserComponent,
    CreateCompanyComponent,
    ShowEventComponent,
    ShowEventsComponent,
    HeaderComponent
  ]

})

export class SharedModule {}
