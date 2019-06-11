import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SitesService } from '../../../core/http/sites/sites.service';
import { Sites } from '../../../interfaces/sites';

@Component({
  selector: 'app-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.scss']
})
export class EditSiteComponent implements OnInit {

  editSiteForm: FormGroup;
  siteID: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sitesService: SitesService) { }

  ngOnInit() {
    this.siteID = this.route.snapshot.paramMap.get('id');
    this.createForm();
    this.getSite();
  }

  createForm() {
    this.editSiteForm = new FormGroup({
      'site': new FormControl(null, Validators.required)
    });
  }

  getSite() {
    this.sitesService.getSite(this.siteID).subscribe(response => {
      this.editSiteForm.controls['site'].setValue(response.data.site);
    });
  }

  onSubmit() {
    if (this.editSiteForm.valid && this.editSiteForm.touched) {
      const site: Sites = <Sites> {
        id: parseInt(this.siteID, 10),
        site: this.editSiteForm.controls['site'].value
      };
      this.sitesService.updateSite(site).subscribe(response => {
        this.router.navigate(['/administrador/sedes']);
      });
    }
  }

}
