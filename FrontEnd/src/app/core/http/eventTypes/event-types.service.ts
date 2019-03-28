import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class EventTypesService {

  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getEventTypes() {
    return this.http.get<Response>(this.apiURL + 'eventTypes');
  }

}
