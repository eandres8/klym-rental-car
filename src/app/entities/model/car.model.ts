import { ICar } from '../interfaces/car.interface';

export class Car {
    constructor(
        public readonly id: string,
        public readonly model: string,
        public readonly year: number,
        public readonly photo: string,
        public readonly brand: string,
        public readonly price: number,
    ) {}

    static fromMap(car: ICar) {
        return new Car(
            car.id || '',
            car.model || '',
            car.year || 0,
            car.photo || '',
            car.brand || '',
            car.price || 0,
        );
    }
}
