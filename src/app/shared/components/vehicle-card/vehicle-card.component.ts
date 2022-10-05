import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICar } from 'src/app/core/entities/interfaces/car.interface';

@Component({
  selector: 'vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent {

  @Input() vehicle: ICar | undefined;

  constructor(
    private readonly router: Router,
  ) { }
  
  public redirectTo() {
    console.log(`/details/${this.vehicle?.id}`);
    this.router.navigate([`/details/${this.vehicle?.id}`]);
  }

}
