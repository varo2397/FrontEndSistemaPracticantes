import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coordinator-companies',
  templateUrl: './coordinator-companies.component.html',
  styleUrls: ['./coordinator-companies.component.css']
})
export class CoordinatorCompaniesComponent implements OnInit {
  //booleanos para saber cual componente cargar
  aprobarempresas: boolean;
  empresasaprobadas: boolean;

  constructor() {
    this.aprobarempresas = false;
    this.empresasaprobadas = true;
  }

  ngoninit() {
  }

  componenteempresasaprobadas(){
    this.aprobarempresas = false;
    this.empresasaprobadas = true;
  }

  componenteaprobarempresas() {
    this.aprobarempresas = true;
    this.empresasaprobadas = false;
  }

}
