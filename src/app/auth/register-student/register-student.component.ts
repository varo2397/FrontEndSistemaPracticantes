import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatePersonComponent } from '../../shared/create-person/create-person.component';
import { CreateUserComponent } from '../../shared/create-user/create-user.component';
import { CreateStudentComponent } from '../../shared/create-student/create-student.component';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

  @ViewChild(CreatePersonComponent) createPerson: CreatePersonComponent;
  @ViewChild(CreateUserComponent) createUser: CreateUserComponent;
  @ViewChild(CreateStudentComponent) createStudent: CreateStudentComponent;
  isLinear = true;
  constructor() { }

  ngOnInit() {
  }

}
