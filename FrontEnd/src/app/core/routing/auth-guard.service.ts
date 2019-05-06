import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../store/app.reducer';
import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
  }
)
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private store: Store<fromRoot.State>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(fromRoot.getIsAuthenticated).pipe(map((isAuthenticated) => {
      console.log(isAuthenticated)
      if (isAuthenticated) {
        return true;
      }
      else {
        this.router.navigate(['/']);
        return false;
      }
    }));
  }

  canLoad(route: Route): Observable<boolean> | boolean {
    return this.store.select(fromRoot.getIsAuthenticated).pipe(map((isAuthenticated) => {
      if (isAuthenticated) {
        return true;
      }
      else {
        this.router.navigate(['/']);
        return false;
      }
    }));
  }
}
