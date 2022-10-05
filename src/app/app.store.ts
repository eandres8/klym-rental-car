import { ActionReducerMap } from '@ngrx/store';

import { CarsState, carsReducer } from './modules/cars/store/cars.reducer';


export interface AppState {
   cars: CarsState, 
}

export const appReducers: ActionReducerMap<AppState> = {
   cars: carsReducer,
};
