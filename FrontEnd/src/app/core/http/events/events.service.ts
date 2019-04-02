import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';

@Injectable({
  providedIn: 'root'
})


export class EventsService {

  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<Response>(this.apiURL + 'events');
  }

  getEvent(eventID: number) {
    return this.http.get<Response>(this.apiURL + 'events/' + eventID );
  }
}
