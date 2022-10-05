import { IRequestCar } from '../entities/interfaces/car.interface';

export const CAR_LIST_MOCK: IRequestCar[] = [
    {
      id: 'id1',
      model: 'Stepway',
      photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      year: 2018,
      brand: 'Renault',
      price: 32000,
      description: 'sea cual sea el camino, estás a la altura',
      motor: 1600,
      mileage: 13002,
      createdAt: 1664983317589,
      updatedAt: 1664983317589,
      state: 'ACTIVE',
    },
    {
      id: 'id2',
      model: 'Gol',
      photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      year: 2020,
      brand: 'Volkswagen',
      price: 40000,
      description: 'Funcional y seguro al mismo tiempo, un ejemplo perfecto de cómo un auto simple puede sobresalir',
      motor: 1600,
      mileage: 28483,
      createdAt: 1664983317589,
      updatedAt: 1664983317589,
      state: 'ACTIVE',
    },
  ]