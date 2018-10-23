import {Component, OnInit, ViewChild} from '@angular/core';
import {CreatePersonComponent} from '../../general/create-person/create-person.component';
import {CreateUserComponent} from '../../general/create-user/create-user.component';
import {CreateStudentComponent} from '../../general/create-student/create-student.component';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  @ViewChild(CreatePersonComponent) createPerson: CreatePersonComponent;
  @ViewChild(CreateUserComponent) createUser: CreateUserComponent;
  @ViewChild(CreateStudentComponent) createStudent: CreateStudentComponent;



  constructor() { }

  ngOnInit() {
  }

}
