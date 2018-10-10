import { Component, OnInit, ViewChild } from '@angular/core';

import { CreatePersonComponent } from '../../general/create-person/create-person.component';

import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  @ViewChild(CreatePersonComponent) createPerson: CreatePersonComponent;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

}
