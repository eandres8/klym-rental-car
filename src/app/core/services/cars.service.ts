import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

import { CAR_LIST_MOCK } from '../mocks/cars.mock';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  public getCars() {
    return of(CAR_LIST_MOCK).pipe(
      delay(1500)
    );
  }
}
