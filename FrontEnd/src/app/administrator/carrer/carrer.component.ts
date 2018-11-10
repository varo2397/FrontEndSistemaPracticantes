import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.css']
})
export class CarrerComponent implements OnInit {

  carreras: Observable<Object>;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.obtenerCarreras();
  }

  obtenerCarreras() {
    this.carreras = this.http.get('http://localhost:3000/administrator/careers');
  }

}
