import { createAction, props } from '@ngrx/store';

import { ICar } from 'src/app/entities/interfaces/car.interface';

export const setCarsAction = createAction(
    '[CARS] SET_CARS',
    props<{ cars: ICar[] }>(),
);

export const cleanCarsAction = createAction('[CARS] CLEAN_CARS');

export const setTextFilterAction = createAction(
    '[CARS] SET_TEXT_FILTER',
    props<{ textFilter: string }>(),
);
