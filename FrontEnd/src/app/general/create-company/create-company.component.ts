import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {

  formCompany: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formCompany = new FormGroup({
      'cedulaJuridica' : new FormControl(null, [Validators.min(10000000),
        Validators.max(9999999999), Validators.required]),
      'nombreEmpresa' : new FormControl(null,Validators.required)
    })


  }
}
