import { createReducer, on } from '@ngrx/store';

import { cleanCarsAction, setCarsAction, setTextFilterAction } from './cars.actions';
import { ICar } from 'src/app/entities/interfaces/car.interface';

export interface CarsState {
    cars: ICar[];
    textFilter: string;
}

export const initialState: CarsState = {
   cars: [],
   textFilter: '',
}

export const carsReducer = createReducer(
    initialState,
    on(setCarsAction, (state: CarsState, { cars }) => ({ ...state, cars: [...cars] })),
    on(cleanCarsAction, state => ({ ...state, cars: []})),
    on(setTextFilterAction, (state: CarsState, { textFilter }) => ({ ...state, textFilter })),
);
