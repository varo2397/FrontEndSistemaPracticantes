import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-site',
  templateUrl: './create-site.component.html',
  styleUrls: ['./create-site.component.scss']
})
export class CreateSiteComponent implements OnInit {

  siteForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.siteForm = new FormGroup({
      'site': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {

  }

}
