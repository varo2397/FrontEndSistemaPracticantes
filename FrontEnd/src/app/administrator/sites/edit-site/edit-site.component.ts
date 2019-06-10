import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.scss']
})
export class EditSiteComponent implements OnInit {

  editSiteForm: FormGroup;
  siteID: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.siteID = this.route.snapshot.paramMap.get('id');
    this.createForm();
  }

  createForm() {
    this.editSiteForm = new FormGroup({
      'site': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {

  }

}
