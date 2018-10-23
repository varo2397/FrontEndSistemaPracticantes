import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  schools: Observable<Object>;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.obtenerSchool();
  }

  obtenerSchool() {
    this.schools = this.http.get('http://localhost:3000/administrator/schools');
  }

}
