import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Sites } from '../../../../interfaces/sites';
import { Career } from '../../../../interfaces/career';
import { SitesService } from '../../../../core/http/sites/sites.service';

@Component({
  selector: 'app-coordinator-info',
  templateUrl: './coordinator-info.component.html',
  styleUrls: ['./coordinator-info.component.scss']
})
export class CoordinatorInfoComponent implements OnInit {

  coordinatorForm: FormGroup;
  sites: Sites[];
  careers: Career[];

  constructor(private sitesService: SitesService) { }

  ngOnInit() {
    this.coordinatorForm = new FormGroup({
      'career': new FormControl(null, [Validators.required]),
      'site': new FormControl(null, [Validators.required])
    });
    this.getSites();

  }

  getSites() {
    this.sitesService.getSites().subscribe(response => {
      this.sites = <Sites[]>response.data;
    });
  }

  getCareers(siteID) {
    this.sites.forEach((site) => {
      if (site.id === siteID) {
        this.careers = site.careers;
      }
    });
  }

  getFormValues(): any {
    const data = {
      site_id: this.coordinatorForm.controls['site'].value,
      career_id: this.coordinatorForm.controls['career'].value
    };
    return data;
  }

}
