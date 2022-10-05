import { createReducer, on } from '@ngrx/store';

import {
  cleanCarsAction,
  setCarsAction,
  setTextFilterAction,
  startLoadingAction,
  stopLoadingAction,
} from './cars.actions';
import { ICar } from 'src/app/core/entities/interfaces/car.interface';

export interface CarsState {
  cars: ICar[];
  textFilter: string;
  isLoading: boolean;
}

export const initialState: CarsState = {
  cars: [],
  textFilter: '',
  isLoading: false,
};

export const carsReducer = createReducer(
  initialState,
  on(setCarsAction, (state: CarsState, { cars }) => ({
    ...state,
    cars: [...cars],
    isLoading: false,
    textFilter: '',
  })),
  on(cleanCarsAction, (state) => ({ ...state, cars: [] })),
  on(setTextFilterAction, (state: CarsState, { textFilter }) => ({
    ...state,
    textFilter,
  })),
  on(startLoadingAction, (state) => ({ ...state, isLoading: true })),
  on(stopLoadingAction, (state) => ({ ...state, isLoading: false }))
);
