import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatePersonComponent } from '../../shared/create-person/create-person.component';
import { CreateCompanyComponent } from '../../shared/create-company/create-company.component';
import { CreateUserComponent } from '../../shared/create-user/create-user.component';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit {

  @ViewChild(CreatePersonComponent) createPerson: CreatePersonComponent;
  @ViewChild(CreateCompanyComponent) createCompany: CreateCompanyComponent;
  @ViewChild(CreateUserComponent) createUser: CreateUserComponent;


  constructor() { }

  ngOnInit() {
  }

}
