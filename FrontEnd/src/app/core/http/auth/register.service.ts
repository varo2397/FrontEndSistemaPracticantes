import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';
import {People} from '../../../interfaces/people';
import {User} from '../../../interfaces/user';
import {Student} from '../../../interfaces/student';
import {Company} from "../../../interfaces/company";

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  registerStudent(person: People, user: User, student: Student, image: File) {
    const json = {
      student: student,
      user: user,
      person: person,
    };
    console.log(json);
    return this.http.post<Response>(this.apiURL + 'student', json);
  }

  registerCompany(person: People, user: User, company: Company) {
    // const json = {
    //
    // }
  }
}
