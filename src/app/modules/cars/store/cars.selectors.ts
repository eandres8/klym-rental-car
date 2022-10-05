import { createSelector } from '@ngrx/store';

import { AppState } from 'src/app/app.store';
import { CarsState } from './cars.reducer';

 
export const selectCarsState = (state: AppState) => state.cars;
 
export const selectCarList = createSelector(
    selectCarsState,
    (state: CarsState) => state.cars,
);
 
export const selectTextFilter = createSelector(
    selectCarsState,
    (state: CarsState) => state.textFilter,
);
 
export const selectLoadingState = createSelector(
    selectCarsState,
    (state: CarsState) => state.isLoading,
);
