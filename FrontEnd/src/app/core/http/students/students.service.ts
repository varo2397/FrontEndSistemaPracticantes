import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) { }

  getApprovedStudents() {
    return this.http.get<Response>(this.apiURL + 'students/aproved');
  }

  getPendingStudents() {
    return this.http.get<Response>(this.apiURL + 'students/pending');
  }

}
