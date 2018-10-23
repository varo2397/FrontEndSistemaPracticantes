import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  authenticate(user){
    return this.http.post('http://localhost:3000/login', user);

  }
}
