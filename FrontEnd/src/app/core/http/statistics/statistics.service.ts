import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';

@Injectable({
  providedIn: 'root'
})

export class StatisticsService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getPeoplePerSemester() {
    return this.http.get(this.apiURL + 'peoplePerSemester');
  }
}
