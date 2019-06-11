import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';
import { Career } from '../../../interfaces/career';

@Injectable({
  providedIn: 'root'
})

export class CareersService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getCareers() {
    return this.http.get<Response>(this.apiURL + 'careers');
  }

  getCareer(careerID: string) {
    return this.http.get<Response>(this.apiURL + 'career/' + careerID);
  }

  createCareer(career: Career) {
    return this.http.post<Response>(this.apiURL + 'career', career);
  }

  updateCareer(career: Career) {
    return this.http.put<Response>(this.apiURL + 'career/' + career.id, career);
  }

  deleteCareer(careerID: string) {
    return this.http.delete<Response>(this.apiURL + 'career/' + careerID);
  }
}
