import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//students components
import { StudentsComponent } from './students/students.component';
import { StudentEventsComponent } from './students/student-events/student-events.component';
import { EvaluateInternshipProcessComponent } from './students/evaluations/evaluate-internship-process/evaluate-internship-process.component';
import { EvaluateCompanyComponent } from './students/evaluations/evaluate-company/evaluate-company.component';
import { EvaluateTeacherComponent } from './students/evaluations/evaluate-teacher/evaluate-teacher.component';

//companies components
import { CompaniesComponent } from './companies/companies.component';
import { CompanyEventsComponent } from './companies/company-events/company-events.component';

//coordinators components
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { StatisticsComponent } from './coordinator/statistics/statistics.component';
import { CoordinatorDocumentsComponent } from './coordinator/coordinator-documents/coordinator-documents.component';
import { InternshipStudentsComponent } from './coordinator/internship-students/internship-students.component';
import { CoordinatorEventsComponent } from './coordinator/coordinator-events/coordinator-events.component';
import { CoordinatorCompaniesComponent } from './coordinator/coordinator-companies/coordinator-companies.component';
import { InternshipTeachersComponent } from './coordinator/internship-teachers/internship-teachers.component';

import { AdministratorComponent } from './administrator/administrator.component';
import { CarrerComponent } from './administrator/carrer/carrer.component';
import { CreateCarrerComponent } from './administrator/carrer/create-carrer/create-carrer.component';
import { EditCarrerComponent } from './administrator/carrer/edit-carrer/edit-carrer.component';
import { CreateCoordinatorComponent } from './administrator/coordinator/create-coordinator/create-coordinator.component';
import { SiteComponent } from './administrator/site/site.component';
import { CreateTeacherComponent } from './coordinator/internship-teachers/create-teacher/create-teacher.component';
import { AdminComponent } from './administrator/admin/admin.component';
import { CreateAdminComponent } from './administrator/admin/create-admin/create-admin.component';
import { SemesterComponent } from './administrator/semester/semester.component';
import { CreateSemesterComponent } from './administrator/semester/create-semester/create-semester.component';
import { routesService } from './routes.service';
import { LoginComponent } from './login/login.component';
import { StudentRegisterComponent } from './login/student-register/student-register.component';
import { CompanyRegisterComponent } from './login/company-register/company-register.component';
import {CreateSiteComponent} from './administrator/site/create-site/create-site.component';
import {AdminCoordinatorComponent} from './administrator/coordinator/admin-coordinator.component';
import { AproveCompaniesComponent } from './coordinator/coordinator-companies/aprove-companies/aprove-companies.component';
import { ShowCompaniesComponent } from './coordinator/coordinator-companies/show-companies/show-companies.component';
import { AproveIntershipStudentComponent } from './coordinator/internship-students/aprove-intership-student/aprove-intership-student.component';
import {CreateDocumentComponent} from './coordinator/coordinator-documents/create-document/create-document.component';
import {EditDocumentComponent} from './coordinator/coordinator-documents/edit-document/edit-document.component';
import {CreateEventComponent} from './coordinator/coordinator-events/create-event/create-event.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateCompanyComponent } from './general/create-company/create-company.component';
import { CreateStudentComponent } from './general/create-student/create-student.component';
import { CreatePersonComponent } from './general/create-person/create-person.component';
import { CreateUserComponent } from './general/create-user/create-user.component';
import { PersonalInformationComponent } from './general/personal-information/personal-information.component';
import { CompanyDocumentsComponent } from './companies/company-documents/company-documents.component';
import { EvaluationsComponent } from './students/evaluations/evaluations.component';
import { SchoolComponent } from './administrator/school/school.component';
import { CreateSchoolComponent } from './administrator/school/create-school/create-school.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentEventsComponent,
    EvaluateInternshipProcessComponent,
    EvaluateCompanyComponent,
    EvaluateTeacherComponent,
    CompaniesComponent,
    CompanyEventsComponent,
    CoordinatorComponent,
    StatisticsComponent,
    CoordinatorDocumentsComponent,
    InternshipStudentsComponent,
    CoordinatorEventsComponent,
    CoordinatorCompaniesComponent,
    InternshipTeachersComponent,
    AdministratorComponent,
    CarrerComponent,
    CreateCarrerComponent,
    EditCarrerComponent,
    CreateCoordinatorComponent,
    SiteComponent,
    CreateTeacherComponent,
    AdminComponent,
    CreateAdminComponent,
    SemesterComponent,
    CreateSemesterComponent,
    LoginComponent,
    StudentRegisterComponent,
    CompanyRegisterComponent,
    CreateSiteComponent,
    AdminCoordinatorComponent,
    AproveCompaniesComponent,
    ShowCompaniesComponent,
    AproveIntershipStudentComponent,
    CreateDocumentComponent,
    EditDocumentComponent,
    CreateEventComponent,
    CreateCompanyComponent,
    CreateStudentComponent,
    CreatePersonComponent,
    CreateUserComponent,
    PersonalInformationComponent,
    CompanyDocumentsComponent,
    EvaluationsComponent,
    SchoolComponent,
    CreateSchoolComponent
  ],
  imports: [
    BrowserModule,
    routesService,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
