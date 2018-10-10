import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  administradores: Observable<Object>;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.obtenerAdministradores();
  }

  obtenerAdministradores() {
    this.administradores = this.http.get('http://localhost:3000/administrator/admins');
  }

}
