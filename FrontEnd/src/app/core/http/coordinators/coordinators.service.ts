import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';


@Injectable({
  providedIn: 'root'
})

export class CoordinatorsService {

  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getCoordinators() {
    return this.http.get<Response>(this.apiURL + 'coordinator');
  }

  createCoordinator(coordinator: any) {
    return this.http.post<Response>(this.apiURL + 'coordinator', coordinator);
  }

  deleteCoordinator(coordinatorID: number) {
    return this.http.delete<Response>(this.apiURL + 'coordinator/' + coordinatorID);
  }
}

