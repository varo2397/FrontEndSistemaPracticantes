import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatePersonComponent } from '../../shared/create-person/create-person.component';
import { CreateCompanyComponent } from '../../shared/create-company/create-company.component';
import { CreateUserComponent } from '../../shared/create-user/create-user.component';
import {RegisterService} from '../../core/http/auth/register.service';
import {People} from '../../interfaces/people';
import {User} from '../../interfaces/user';
import {Company} from '../../interfaces/company';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit {

  @ViewChild(CreatePersonComponent, { static: true }) createPerson: CreatePersonComponent;
  @ViewChild(CreateCompanyComponent, { static: true }) createCompany: CreateCompanyComponent;
  @ViewChild(CreateUserComponent, { static: true }) createUser: CreateUserComponent;
  errors: string = null;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.createPerson.personForm.valid && this.createUser.userForm.valid && this.createCompany.companyForm.valid) {
      const person: People = this.createPerson.getFormValues();
      const user: User = this.createUser.getFormValues();
      const company: Company = this.createCompany.getFormValues();
      this.registerService.registerCompany(person, user, company).subscribe(response => {
        if (response.data === 'Sucess') {
          this.router.navigate(['login']);
        }
        else {
          this.errors = response.error;
        }
      });
    }
  }

}
