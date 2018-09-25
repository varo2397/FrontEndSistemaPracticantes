import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-create-site',
  templateUrl: './create-site.component.html',
  styleUrls: ['./create-site.component.css']
})
export class CreateSiteComponent implements OnInit {

  formSite: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formSite = new FormGroup({
      'siteName': new FormControl(null, [Validators.required]),
      'location': new FormControl(null, Validators.required)
    });
  }

}
