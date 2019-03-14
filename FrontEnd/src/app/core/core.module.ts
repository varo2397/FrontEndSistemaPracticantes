import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './http/auth/login.service';
import { AuthService } from './http/auth/auth.service';
import { EventTypeService } from './http/eventType/event-type.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [],
  providers: [
    LoginService,
    AuthService,
    EventTypeService
  ]
})

export class CoreModule {}
