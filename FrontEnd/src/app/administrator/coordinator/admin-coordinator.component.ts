import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})

export class AdminCoordinatorComponent implements OnInit {

  coordinators: Observable<Object>;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.obtenerCoordinadores();
  };

  obtenerCoordinadores() {
    this.coordinators = this.http.get('http://localhost:3000/administrator/coordinator');
  }
}
