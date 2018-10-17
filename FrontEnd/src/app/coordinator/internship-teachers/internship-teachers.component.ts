import { Component, OnInit } from '@angular/core';
import {InternshipProfessorService} from '../../services/internship-professor.service';

@Component({
  selector: 'app-internship-teachers',
  templateUrl: './internship-teachers.component.html',
  styleUrls: ['./internship-teachers.component.css']
})
export class InternshipTeachersComponent implements OnInit {

  professors;

  constructor(private _professor: InternshipProfessorService) { }

  ngOnInit() {
    this._professor.getProfessor()
      .subscribe(data => {
        this.professors = data;
      });

  }

}
