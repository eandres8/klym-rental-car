import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { ICar } from 'src/app/entities/interfaces/car.interface';
import { AppState } from 'src/app/app.store';

@Component({
  selector: 'vehicle-card-container',
  templateUrl: './vehicle-card-container.component.html',
  styleUrls: ['./vehicle-card-container.component.scss']
})
export class VehicleCardContainerComponent implements OnInit, OnDestroy {

  private store$: Subscription | undefined;
  vehicleList: ICar[] = []; 

  constructor(
    private readonly appStore: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store$ = this.appStore.select('cars').subscribe(({ cars }) => {
      this.vehicleList = cars;
    });
  }

  ngOnDestroy(): void {
    this.store$?.unsubscribe();
  }

}
