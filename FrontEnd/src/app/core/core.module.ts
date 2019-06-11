import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './http/auth/login.service';
import { AuthService } from './http/auth/auth.service';
import { EventTypesService } from './http/eventTypes/event-types.service';
import { SitesService } from './http/sites/sites.service';
import { RegisterService } from './http/auth/register.service';
import { ImageConverterService } from './general/imageConverter.service';
import { SemestersService } from './http/semesters/semesters.service';
import { GendersService } from './http/genders/genders.service';
import { EventsService } from './http/events/events.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './http/interceptors/auth.interceptor';
import { CareersService } from './http/careers/careers.service';
import { CoordinatorsService } from './http/coordinators/coordinators.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [],
  providers: [
    LoginService,
    AuthService,
    EventTypesService,
    SitesService,
    RegisterService,
    ImageConverterService,
    SemestersService,
    GendersService,
    EventsService,
    CareersService,
    CoordinatorsService,
    {provide:  HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})

export class CoreModule {}
