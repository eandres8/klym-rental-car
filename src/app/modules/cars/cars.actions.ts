import { createAction, props } from '@ngrx/store';

import { ICar } from 'src/app/entities/interfaces/car.interface';

export const setCarsAction = createAction(
    '[Cars] setCarsAction',
    props<{ cars: ICar[] }>(),
);

export const cleanCarsAction = createAction('[Cars] cleanCarsAction');
