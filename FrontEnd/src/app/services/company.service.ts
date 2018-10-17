import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  registerCompany(company){
    return this.http.post('http://localhost:3000/company/register', company);
  }
}
