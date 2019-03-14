import { Injectable } from '@angular/core';
import { Login } from '../../../interfaces/login';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  login(login: Login) {
    return this.http.post<Response>(this.apiURL + 'login', login);
  }

}
