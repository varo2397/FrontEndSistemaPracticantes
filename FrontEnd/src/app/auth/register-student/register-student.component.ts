import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatePersonComponent } from '../../shared/create-person/create-person.component';
import { CreateUserComponent } from '../../shared/create-user/create-user.component';
import { CreateStudentComponent } from '../../shared/create-student/create-student.component';
import { Student } from '../../interfaces/student';
import { User } from '../../interfaces/user';
import { People } from '../../interfaces/people';
import {RegisterService} from '../../core/http/auth/register.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

  @ViewChild(CreatePersonComponent) createPerson: CreatePersonComponent;
  @ViewChild(CreateUserComponent) createUser: CreateUserComponent;
  @ViewChild(CreateStudentComponent) createStudent: CreateStudentComponent;
  constructor(private register: RegisterService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.createPerson.personForm.valid && this.createUser.userForm.valid && this.createStudent.studentForm.valid) {
      const person: People = this.createPerson.getFormValues();
      const user: User = this.createUser.getFormValues();
      const student: Student = this.createStudent.getFormValues();
      const image = this.createStudent.file;
      this.register.registerStudent(person, user, student, image).subscribe(response => {
        console.log(response);
      });
    }
  }

}
