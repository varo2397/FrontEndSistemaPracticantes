import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Company} from "../../interfaces/company";
import {compareNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {

  companyForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.companyForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'legalID': new FormControl(null, [
        Validators.min(1000000000),
        Validators.max(9999999999),
        Validators.required]),
      'direction': new FormControl(null, [Validators.required])
    });
  }

  getFormValues(): Company {
    const company: Company = <Company> {
      name: this.companyForm.get('name').value,
      legal_id: this.companyForm.get('legalID').value,
      address: this.companyForm.get('direction').value
    };

    return company;
  }

}
