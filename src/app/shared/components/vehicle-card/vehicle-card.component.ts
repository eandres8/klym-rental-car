import { Component, Input, OnInit } from '@angular/core';

import { ICar } from 'src/app/core/entities/interfaces/car.interface';

@Component({
  selector: 'vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent implements OnInit {

  @Input() vehicle: ICar | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
