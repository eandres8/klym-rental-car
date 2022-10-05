import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';

import { AppState } from 'src/app/app.store';
import { ICar } from 'src/app/core/entities/interfaces/car.interface';
import { CarsState } from '../../store/cars.reducer';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit, OnDestroy {

  vehicle: ICar | undefined;
  storeSubscription: Subscription | undefined;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit() {
    const carId = this.getId();

    this.storeSubscription = this.store.select('cars').pipe(
      map<CarsState, ICar[]>(cars => cars.cars),
      map(cars => cars.find(car => car.id === carId)),
    ).subscribe(car => {
      this.vehicle = car;
    });
  }

  ngOnDestroy(): void {
      this.storeSubscription?.unsubscribe();
  }

  private getId() {
    const carId = this.route.snapshot.paramMap.get('id');

    if (!carId) {
      this.router.navigate(['']);
      return '';
    }

    return carId;
  }

  backButton() {
    this.router.navigate(['']);
  }
}
