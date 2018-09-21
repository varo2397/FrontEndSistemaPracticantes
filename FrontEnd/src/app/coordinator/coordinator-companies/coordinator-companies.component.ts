import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coordinator-companies',
  templateUrl: './coordinator-companies.component.html',
  styleUrls: ['./coordinator-companies.component.css']
})
export class CoordinatorCompaniesComponent implements OnInit {
  //booleanos para saber cual componente cargar
  aprobarEmpresas: boolean;
  empresasAprobadas: boolean;

  constructor() {
    this.aprobarEmpresas = false;
    this.empresasAprobadas = true;
  }

  ngOnInit() {
  }

  componenteEmpresasAprobadas(){
    this.aprobarEmpresas = false;
    this.empresasAprobadas = true;
  }

  componenteAprobarEmpresas() {
    this.aprobarEmpresas = true;
    this.empresasAprobadas = false;
  }

}
