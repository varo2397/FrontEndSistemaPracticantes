import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';
import { Event } from '../../../interfaces/event';

@Injectable({
  providedIn: 'root'
})


export class EventsService {

  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<Response>(this.apiURL + 'events');
  }

  getEvent(eventID: string) {
    return this.http.get<Response>(this.apiURL + 'events/' + eventID );
  }

  createEvent(event: Event) {
    return this.http.post<Response>(this.apiURL + 'events', event);
  }

  updateEvent(event: Event) {
    return this.http.post<Response>(this.apiURL + 'events/' + event.id , event);
  }
}
