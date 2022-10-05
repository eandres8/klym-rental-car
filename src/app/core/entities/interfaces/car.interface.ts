export interface IRequestCar {
    id: string;
    model: string;
    year: number;
    photo: string;
    brand: string;
    price: number;
    motor: number;
    mileage: number;
    description: string;
    state: string;
    createdAt: number;
    updatedAt: number;
}

export type ICar = Omit<IRequestCar, 'description' | 'state' | 'createdAt' | 'updatedAt' | 'motor' | 'mileage'>;