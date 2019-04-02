import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store/app.reducer';
import {Token} from '../../../interfaces/token';
import {first, flatMap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authToken$: Observable<Token>;

  constructor(private store: Store<fromRoot.State>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('Intercepted!', req);
    // this.authToken$ = this.store.select(fromRoot.getToken);
    // console.log(this.authToken$.token_type);
    // const copiedReq = req.clone({headers: new HttpHeaders({
    //     'Content-type': 'application/json',
    //     'Accept': 'application/json',
    //     'Authorization': ''
    //   })});
    // return next.handle(copiedReq);

    return this.store.select(fromRoot.getToken).pipe(
      flatMap(token => {
        const copiedReq = req.clone({headers: new HttpHeaders({
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token.token_type + ' ' + token.access_token
          })});
        return next.handle(copiedReq);
      })
    );
  }
}
