import { createAction, props } from '@ngrx/store';

import { ICar } from 'src/app/core/entities/interfaces/car.interface';

export const enum CarsActions {
    SET_CARS = '[CARS] SET_CARS',
    CLEAN_CARS = '[CARS] CLEAN_CARS',
    SET_TEXT_FILTER = '[CARS] SET_TEXT_FILTER',
    REQUEST_CARS = '[CARS] REQUEST_CARS',
}

export const setCarsAction = createAction(
    CarsActions.SET_CARS,
    props<{ cars: ICar[] }>(),
);

export const cleanCarsAction = createAction(CarsActions.CLEAN_CARS);

export const requestCarsAction = createAction(CarsActions.REQUEST_CARS);

export const setTextFilterAction = createAction(
    CarsActions.SET_TEXT_FILTER,
    props<{ textFilter: string }>(),
);
