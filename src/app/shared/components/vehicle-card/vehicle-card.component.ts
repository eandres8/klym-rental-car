import { Component, Input, OnInit } from '@angular/core';

import { IVehicleCard } from 'src/app/entities/interfaces/vehicle-card.interface';

@Component({
  selector: 'vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent implements OnInit {

  @Input() vehicle: IVehicleCard | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
