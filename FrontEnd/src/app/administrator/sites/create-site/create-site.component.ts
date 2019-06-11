import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SitesService } from '../../../core/http/sites/sites.service';
import { Sites } from '../../../interfaces/sites';

@Component({
  selector: 'app-create-site',
  templateUrl: './create-site.component.html',
  styleUrls: ['./create-site.component.scss']
})
export class CreateSiteComponent implements OnInit {

  siteForm: FormGroup;

  constructor(private sitesService: SitesService,
              private router: Router) { }

  ngOnInit() {
    this.siteForm = new FormGroup({
      'site': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.siteForm.valid && this.siteForm.touched) {
      const site: Sites = <Sites> {
        site: this.siteForm.controls['site'].value
      };
      this.sitesService.createSite(site).subscribe(response => {
        this.router.navigate(['/administrador/sedes']);
      });
    }
  }

}
