import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.store';
import { requestCarsAction, startLoadingAction } from '../../store/cars.actions';
import { selectLoadingState } from '../../store/cars.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  isLoading$: Observable<boolean> = new Observable();

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectLoadingState);
    this.store.dispatch(startLoadingAction());
    this.store.dispatch(requestCarsAction());
  }

}
