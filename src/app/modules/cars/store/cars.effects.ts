import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CarsService } from 'src/app/core/services/cars.service';
import { CarMapper } from 'src/app/core/entities/model/car.model';
import { CarsActions, setCarsAction } from './cars.actions';
import { IRequestCar } from 'src/app/core/entities/interfaces/car.interface';
 
@Injectable()
export class CarsEffects {
 
  loadCars$ = createEffect(() => this.actions$.pipe(
    ofType(CarsActions.REQUEST_CARS),
    mergeMap(() => this.carsService.getCars()
      .pipe(
        map(request => CarMapper.mapFromRequest(request as IRequestCar[])),
        map(cars => setCarsAction({ cars })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private readonly actions$: Actions,
    private readonly carsService: CarsService,
  ) {}
}