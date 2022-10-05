import { IRequestCar } from '../entities/interfaces/car.interface';

const photo = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

export const CAR_LIST_MOCK: IRequestCar[] = [
    {
      id: 'id1',
      model: 'Stepway',
      photo: 'https://cdn.group.renault.com/ren/co/vehicles/stepway/home/nuevo-renault-stepway-gris-cassiope.jpg.ximg.xsmall.jpg/7aa97083ea.jpg',
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
      photo: 'https://www.elcarrocolombiano.com/wp-content/uploads/2016/12/20161203-VOLKSWAGEN-GOL-GT-CONCEPT-01.jpg',
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
  ];