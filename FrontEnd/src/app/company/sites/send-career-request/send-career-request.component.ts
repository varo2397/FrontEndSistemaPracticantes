import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SitesService } from '../../../core/http/sites/sites.service';
import { Sites } from '../../../interfaces/sites';
import { Career } from '../../../interfaces/career';

@Component({
  selector: 'app-send-career-request',
  templateUrl: './send-career-request.component.html',
  styleUrls: ['./send-career-request.component.scss']
})
export class SendCareerRequestComponent implements OnInit {

  sendCareerRequestForm: FormGroup;
  sites: Sites[];
  careers: Career[];

  constructor(private sitesService: SitesService) { }

  ngOnInit() {
    this.sendCareerRequestForm = new FormGroup({
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

}
