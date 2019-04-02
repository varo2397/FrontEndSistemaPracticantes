import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';
@Injectable({
  providedIn: 'root'
})


export class GendersService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getGenders() {
    return this.http.get<Response>(this.apiURL + 'catalog/gender');
  }
}
