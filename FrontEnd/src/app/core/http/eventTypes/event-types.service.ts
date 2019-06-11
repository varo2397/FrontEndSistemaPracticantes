import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';
import { EventType } from '../../../interfaces/eventType';

@Injectable({
  providedIn: 'root'
})
export class EventTypesService {

  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getEventTypes() {
    return this.http.get<Response>(this.apiURL + 'eventTypes');
  }

  getEventType(eventTypeID: string) {
    return this.http.get<Response>(this.apiURL + 'eventTypes/' + eventTypeID);
  }

  createEventType(eventType: EventType) {
    return this.http.post<Response>(this.apiURL + 'eventTypes', eventType);
  }

  updateEventType(eventType: EventType) {
    return this.http.put<Response>(this.apiURL + 'eventTypes/' + eventType.id, eventType);
  }

  deleteEventType(eventTypeID: string) {
    return this.http.delete<Response>(this.apiURL + 'eventTypes/' + eventTypeID);
  }

}
