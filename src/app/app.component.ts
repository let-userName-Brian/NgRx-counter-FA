import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { getLoading, getErrorMessage } from './store/shared/shared.selector';
import { autoLoginAction } from './auth/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  errorMessage$: Observable<string>;
  showLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.showLoading$ = this.store.select(getLoading);
    this.errorMessage$ = this.store.select(getErrorMessage);
    this.store.dispatch(autoLoginAction())
  }
}
