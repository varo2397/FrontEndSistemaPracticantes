import {Component, OnInit, ViewChild} from '@angular/core';
import {CreatePersonComponent} from '../../general/create-person/create-person.component';
import {CreateUserComponent} from '../../general/create-user/create-user.component';
import {CreateCompanyComponent} from '../../general/create-company/create-company.component';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css']
})
export class CompanyRegisterComponent implements OnInit {

  @ViewChild(CreatePersonComponent) createPerson: CreatePersonComponent;
  @ViewChild(CreateUserComponent) createUser: CreateUserComponent;
  @ViewChild(CreateCompanyComponent) createCompany: CreateCompanyComponent;

  constructor() { }

  ngOnInit() {
  }

  registerCompany(){

  }

}
