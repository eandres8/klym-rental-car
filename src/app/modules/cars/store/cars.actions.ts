import { createAction, props } from '@ngrx/store';

import { ICar } from 'src/app/core/entities/interfaces/car.interface';

export const enum CarsActions {
    SET_CARS = '[CARS] SET_CARS',
    CLEAN_CARS = '[CARS] CLEAN_CARS',
    SET_TEXT_FILTER = '[CARS] SET_TEXT_FILTER',
    REQUEST_CARS = '[CARS] REQUEST_CARS',
    START_LOADING = '[CARS] START_LOADING',
    STOP_LOADING = '[CARS] STOP_LOADING',
}

export const setCarsAction = createAction(
    CarsActions.SET_CARS,
    props<{ cars: ICar[] }>(),
);

export const startLoadingAction = createAction(CarsActions.START_LOADING);

export const stopLoadingAction = createAction(CarsActions.STOP_LOADING);

export const cleanCarsAction = createAction(CarsActions.CLEAN_CARS);

export const requestCarsAction = createAction(CarsActions.REQUEST_CARS);

export const setTextFilterAction = createAction(
    CarsActions.SET_TEXT_FILTER,
    props<{ textFilter: string }>(),
);
