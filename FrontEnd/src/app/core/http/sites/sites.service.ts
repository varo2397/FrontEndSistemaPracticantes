import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';
import { Sites } from '../../../interfaces/sites';

@Injectable({
  providedIn: 'root'
})

export class SitesService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getSites() {
    return this.http.get<Response>(this.apiURL + 'sites');
  }

  getSite(siteID: string) {
    return this.http.get<Response>(this.apiURL + 'site/' + siteID);
  }

  createSite(site: Sites) {
    return this.http.post<Response>(this.apiURL + 'site', site);
  }

  updateSite(site: Sites) {
    return this.http.put<Response>(this.apiURL + 'site/' + site.id, site);
  }

  deleteSite(siteID: string) {
    return this.http.delete<Response>(this.apiURL + 'site/' + siteID);
  }

}
