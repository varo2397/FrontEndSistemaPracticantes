import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  sedes: Observable<Object>;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.obtenerSedes();
  }

  obtenerSedes() {
    this.sedes = this.http.get('http://localhost:3000/administrator/sites');
  }

}
