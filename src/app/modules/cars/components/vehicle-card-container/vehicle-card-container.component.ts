import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, empty, Observable, of, startWith, Subscription } from 'rxjs';

import { ICar } from 'src/app/entities/interfaces/car.interface';
import { AppState } from 'src/app/app.store';
import { selectCarList, selectTextFilter } from '../../cars.selectors';

@Component({
  selector: 'vehicle-card-container',
  templateUrl: './vehicle-card-container.component.html',
  styleUrls: ['./vehicle-card-container.component.scss']
})
export class VehicleCardContainerComponent implements OnInit {

  // TODO: validate init value on Observable
  vehicleList$: Observable<ICar[]> = new Observable();
  textFilter$: Observable<string> = new Observable();

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.vehicleList$ = this.store.select(selectCarList);
    this.textFilter$ = this.store.select(selectTextFilter);
  }

}
