import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatePersonComponent } from '../../../shared/create-person/create-person.component';
import { CreateUserComponent } from '../../../shared/create-user/create-user.component';
import { Router } from '@angular/router';
import { TeacherService } from '../../../core/http/teacher/teacher.service';
import { People } from '../../../interfaces/people';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.scss']
})
export class CreateTeacherComponent implements OnInit {

  error: string;

  @ViewChild(CreatePersonComponent, { static: true }) createPerson: CreatePersonComponent;
  @ViewChild(CreateUserComponent, { static: true }) createUser: CreateUserComponent;

  constructor(private router: Router,
              private teachersService: TeacherService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (
      this.createPerson.personForm.valid && this.createUser.userForm.valid) {
      const person: People = this.createPerson.getFormValues();
      const user: User = this.createUser.getFormValues();
      const json = {
        person: person,
        user: user
      };
      this.teachersService.createTeacher(json).subscribe(response => {
        if (response.data === 'Success') {
          this.router.navigate(['/coordinador/profesores']);
        } else {
          this.error = response.error;
        }
      });
    }
  }

}
