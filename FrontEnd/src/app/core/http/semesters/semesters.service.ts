import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';
import { Semester } from '../../../interfaces/semester';
@Injectable({
  providedIn: 'root'
})


export class SemestersService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getSemesters() {
    return this.http.get<Response>(this.apiURL + 'catalog/semester');
  }

  createSemester(semester: Semester) {

  }
}
