import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';

@Injectable({
  providedIn: 'root'
})

export class TeacherService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getTeachers() {
    return this.http.get<Response>(this.apiURL + 'professor');
  }

  createTeacher(teacher: any) {
    return this.http.post<Response>(this.apiURL + 'professor', teacher);
  }
}
