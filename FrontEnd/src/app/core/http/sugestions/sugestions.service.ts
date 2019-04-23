import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Response } from '../../../interfaces/response';
import {Sugestion} from '../../../interfaces/sugestion';

@Injectable({
  providedIn: 'root'
})

export class SugestionsService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) { }

  createSugestion(sugestion: Sugestion) {
    return this.http.post<Response>(this.apiURL + 'suggestions', sugestion);
  }

}
