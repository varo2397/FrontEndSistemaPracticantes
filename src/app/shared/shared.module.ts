import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CreatePersonComponent } from './create-person/create-person.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateCompanyComponent } from './create-company/create-company.component';


@NgModule({
  declarations: [
    CreatePersonComponent,
    CreateStudentComponent,
    CreateUserComponent,
    CreateCompanyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CreatePersonComponent,
    CreateStudentComponent,
    CreateUserComponent,
    CreateCompanyComponent
  ]

})

export class SharedModule {}
