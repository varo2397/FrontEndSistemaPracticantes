import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Auth from '../../store/auth/auth.actions';
import * as fromAuth from '../../store/auth/auth.reducer';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private store: Store<fromAuth.State>, private router: Router) { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  logOut() {
    this.store.dispatch(new Auth.ResetToken());
    this.router.navigate(['']);
  }

}
