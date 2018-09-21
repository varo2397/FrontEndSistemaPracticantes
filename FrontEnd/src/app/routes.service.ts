import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CompanyRegisterComponent} from './login/company-register/company-register.component';
import {StudentRegisterComponent} from './login/student-register/student-register.component';
import {AdministratorComponent} from './administrator/administrator.component';
import {AdminComponent} from './administrator/admin/admin.component';
import {CreateAdminComponent} from './administrator/admin/create-admin/create-admin.component';
import {CreateCarrerComponent} from './administrator/carrer/create-carrer/create-carrer.component';
import {CarrerComponent} from './administrator/carrer/carrer.component';
import {EditCarrerComponent} from './administrator/carrer/edit-carrer/edit-carrer.component';
import {AdminCoordinatorComponent} from './administrator/coordinator/admin-coordinator.component';
import {CreateCoordinatorComponent} from './administrator/coordinator/create-coordinator/create-coordinator.component';
import {CreateSemesterComponent} from './administrator/semester/create-semester/create-semester.component';
import {SemesterComponent} from './administrator/semester/semester.component';
import {CreateSiteComponent} from './administrator/site/create-site/create-site.component';
import {SiteComponent} from './administrator/site/site.component';
import {CompaniesComponent} from './companies/companies.component';
import {CompanyEventsComponent} from './companies/company-events/company-events.component';
import {CoordinatorComponent} from './coordinator/coordinator.component';
import {CoordinatorCompaniesComponent} from './coordinator/coordinator-companies/coordinator-companies.component';
import {AproveCompaniesComponent} from './coordinator/coordinator-companies/aprove-companies/aprove-companies.component';
import {ShowCompaniesComponent} from './coordinator/coordinator-companies/show-companies/show-companies.component';
import {CoordinatorDocumentsComponent} from './coordinator/coordinator-documents/coordinator-documents.component';
import {CreateDocumentComponent} from './coordinator/coordinator-documents/create-document/create-document.component';
import {EditDocumentComponent} from './coordinator/coordinator-documents/edit-document/edit-document.component';
import {CoordinatorEventsComponent} from './coordinator/coordinator-events/coordinator-events.component';
import {CreateEventComponent} from './coordinator/coordinator-events/create-event/create-event.component';
import {InternshipStudentsComponent} from './coordinator/internship-students/internship-students.component';
import {AproveIntershipStudentComponent} from './coordinator/internship-students/aprove-intership-student/aprove-intership-student.component';
import {InternshipTeachersComponent} from './coordinator/internship-teachers/internship-teachers.component';
import {CreateTeacherComponent} from './coordinator/internship-teachers/create-teacher/create-teacher.component';
import {StatisticsComponent} from './coordinator/statistics/statistics.component';
import {StudentsComponent} from './students/students.component';
import {StudentEventsComponent} from './students/student-events/student-events.component';
import {EvaluateCompanyComponent} from './students/evaluations/evaluate-company/evaluate-company.component';
import {EvaluateInternshipProcessComponent} from './students/evaluations/evaluate-internship-process/evaluate-internship-process.component';
import {EvaluateTeacherComponent} from './students/evaluations/evaluate-teacher/evaluate-teacher.component';
import {CompanyDocumentsComponent} from './companies/company-documents/company-documents.component';
import {CareersComponent} from './companies/careers/careers.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', children: [
      { path: '', component: LoginComponent, pathMatch: 'full'},
      { path: 'registroEmpresa', component: CompanyRegisterComponent },
      { path: 'registroEstudiante', component: StudentRegisterComponent}
    ]},
  { path: 'administrador', component: AdministratorComponent, children:[
      { path: '', redirectTo: 'admins', pathMatch: 'full'},
      { path: 'admins', children:[
          { path: '', component: AdminComponent},
          { path: 'crearAdministrador', component: CreateAdminComponent}
        ]},
      { path: 'carrer', children:[
          { path: '', component: CarrerComponent},
          { path: 'crearCarrera', component: CreateCarrerComponent},
          { path: 'editarCarrera', component: EditCarrerComponent}
        ]},
      { path: 'coordinador', children:[
          { path: '', component: AdminCoordinatorComponent},
          { path: 'crearCoordinador', component: CreateCoordinatorComponent}
        ]},
      { path: 'semester', children:[
          { path: '', component: SemesterComponent},
          { path: 'crearSemestre', component: CreateSemesterComponent}
        ]},
      { path: 'site', children:[
          { path: '', component: SiteComponent},
          { path: 'crearSede', component: CreateSiteComponent}
        ]}
    ]},
  { path: 'empresa', component: CompaniesComponent, children:[
      { path: '', redirectTo: 'eventos', pathMatch: 'full'},
      { path: 'eventos', component: CompanyEventsComponent},
      { path: 'documentos', component: CompanyDocumentsComponent}
      { path: 'carreras', component: CareersComponent}
    ] },
  { path: 'coordinador', component: CoordinatorComponent, children:[
      { path: '', redirectTo: 'empresas' , pathMatch: 'full'},
      { path: 'empresas', component: CoordinatorCompaniesComponent, children:[
          { path: 'aprobarEmpresas', component: AproveCompaniesComponent},
          { path: '', component: ShowCompaniesComponent}
        ]},
      { path: 'documentos', children:[
          { path: '', component: CoordinatorDocumentsComponent},
          { path: 'crearDocumento', component: CreateDocumentComponent},
          { path: 'editarDocumento', component: EditDocumentComponent}
        ]},
      { path: 'eventos', children:[
          { path: '', component: CoordinatorEventsComponent},
          { path: 'crearEvento', component: CreateEventComponent}
        ] },
      { path: 'estudiantes', children:[
          { path: '', component: InternshipStudentsComponent},
          { path: 'aprobarEstudiantes', component: AproveIntershipStudentComponent}
        ]},
      { path: 'profesoresPractica', children:[
          { path: '', component: InternshipTeachersComponent},
          { path: 'crearProfesorPractica', component: CreateTeacherComponent}
        ]},
      { path: 'estadisticas', component: StatisticsComponent}
    ]},
  { path: 'estudiantes', component: StudentsComponent , children:[
      { path: '', redirectTo: 'eventos', pathMatch: 'full'},
      { path: 'eventos', component: StudentEventsComponent},
      { path: 'evaluacion', children:[
          { path: 'empresa', component: EvaluateCompanyComponent},
          { path: 'procesoPractica', component: EvaluateInternshipProcessComponent},
          { path: 'profesorPractica', component: EvaluateTeacherComponent}
        ] }
    ]}
];


@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class routesService {

}
