import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatePersonComponent } from '../../shared/create-person/create-person.component';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

  @ViewChild(CreatePersonComponent) createPerson: CreatePersonComponent;
  isLinear = false;
  constructor() { }

  ngOnInit() {
  }

}
