import { Injectable } from '@angular/core';
import { delay, map, of } from 'rxjs';

import JsonData from '../../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  public getCars() {
    return of(JsonData).pipe(
      map(jsonData => jsonData.data),
      delay(1500)
    );
  }
}
