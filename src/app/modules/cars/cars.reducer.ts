import { createReducer, on } from '@ngrx/store';

import { cleanCarsAction, setCarsAction } from './cars.actions';
import { ICar } from 'src/app/entities/interfaces/car.interface';

export interface CarsState {
    cars: ICar[]; 
}

export const initialState: CarsState = {
   cars: [],
}

export const carsReducer = createReducer(
    initialState,
    on(setCarsAction, (state: CarsState, { cars }) => ({ ...state, cars: [...cars] })),
    on(cleanCarsAction, state => ({ ...state, cars: []})),
);
