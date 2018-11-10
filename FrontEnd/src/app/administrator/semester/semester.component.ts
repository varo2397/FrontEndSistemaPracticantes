import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {

  semestres: Observable<Object>;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.obrenerSemestre();
  }

  obrenerSemestre() {
    this.semestres = this.http.get('http://localhost:3000/administrator/semesters');
  }
}
