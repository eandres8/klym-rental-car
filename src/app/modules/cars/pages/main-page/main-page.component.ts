import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.store';
import { requestCarsAction } from '../../store/cars.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    // replace by effect
    this.store.dispatch(requestCarsAction());
  }

}
