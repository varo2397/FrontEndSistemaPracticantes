import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './http/auth/login.service';
import { AuthService } from './http/auth/auth.service';
import { EventTypesService } from './http/eventTypes/event-types.service';
import {SitesService} from './http/sites/sites.service';
import {RegisterService} from './http/auth/register.service';
import {ImageConverterService} from './general/imageConverter.service';
import {SemestersService} from './http/semesters/semesters.service';
import {GendersService} from './http/genders/genders.service';

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
    GendersService
  ]
})

export class CoreModule {}
