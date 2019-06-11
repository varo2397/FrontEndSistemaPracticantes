import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SitesService } from '../../core/http/sites/sites.service';
import { Sites } from '../../interfaces/sites';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {

  sites: Sites[];

  constructor(private sitesService: SitesService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getSites();
  }

  getSites() {
    this.sitesService.getSites().subscribe(response => {
      this.sites = response.data;
    });
  }

  deleteSite(siteID: number) {
    this.sitesService.deleteSite(siteID.toString()).subscribe(response => {
      if (response.data === 'Success') {
        this.getSites();
      } else {
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this.snackBar.open('No se pudo borrar el semestre', 'Cerrar', {
      duration: 5000
    });
  }

}
