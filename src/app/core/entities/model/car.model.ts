import { ICar, IRequestCar } from '../interfaces/car.interface';

export class Car implements ICar {
  constructor(
    public readonly id: string,
    public readonly model: string,
    public readonly year: number,
    public readonly photo: string,
    public readonly brand: string,
    public readonly price: number
  ) {}

  static fromMap(car: ICar) {
    return new Car(
      car.id || '',
      car.model || '',
      car.year || 0,
      car.photo || '',
      car.brand || '',
      car.price || 0
    );
  }
}

export class CarMapper {
  static mapFromRequest(request: IRequestCar[]) {
    return request.map((item) => Car.fromMap(item));
  }

  static orderByBrand(cars: ICar[]) {
    return cars.sort((carA, carB) => {
      if (carA.brand > carB.brand) {
        return 1;
      }
      if (carA.brand < carB.brand) {
        return -1;
      }

      return 0;
    });
  }
}
