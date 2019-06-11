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
    return this.http.get<Response>(this.apiURL + 'semester');
  }

  getSemester(semesterID: string) {
    return this.http.get<Response>(this.apiURL + 'semester/' + semesterID);
  }

  createSemester(semester: Semester) {
    return this.http.post<Response>(this.apiURL + 'semester', semester);
  }

  updateSemester(semester: Semester) {
    return this.http.put<Response>(this.apiURL + 'semester/' + semester.id, semester);
  }

  deleteSemester(semesterID: string) {
    return this.http.delete<Response>(this.apiURL + 'semester/' + semesterID);
  }
}
