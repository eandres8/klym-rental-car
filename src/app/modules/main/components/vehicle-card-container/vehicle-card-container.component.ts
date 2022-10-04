import { Component, OnInit } from '@angular/core';

import { IVehicleCard } from 'src/app/entities/interfaces/vehicle-card.interface';

@Component({
  selector: 'vehicle-card-container',
  templateUrl: './vehicle-card-container.component.html',
  styleUrls: ['./vehicle-card-container.component.scss']
})
export class VehicleCardContainerComponent implements OnInit {

  readonly vehicleList: IVehicleCard[] = [
    {
      id: 'id1',
      model: 'Stepway',
      photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      year: 2018,
      brand: 'Volkswagen',
      price: 32000,
    },
    {
      id: 'id1',
      model: 'Stepway',
      photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      year: 2018,
      brand: 'Volkswagen',
      price: 32000,
    },
    {
      id: 'id1',
      model: 'Stepway',
      photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      year: 2018,
      brand: 'Volkswagen',
      price: 32000,
    },
    {
      id: 'id1',
      model: 'Stepway',
      photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      year: 2018,
      brand: 'Volkswagen',
      price: 32000,
    },
    {
      id: 'id1',
      model: 'Stepway',
      photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      year: 2018,
      brand: 'Volkswagen',
      price: 32000,
    },
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
