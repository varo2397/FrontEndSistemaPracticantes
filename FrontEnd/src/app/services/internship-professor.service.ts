import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InternshipProfessorService {

  constructor(private http: HttpClient) { }

  getProfessor(){
    return this.http.get('http://localhost:3000/professor/person');
  }
}
