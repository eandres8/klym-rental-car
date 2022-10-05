import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ICar } from 'src/app/core/entities/interfaces/car.interface';

@Component({
  selector: 'detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.scss']
})
export class DetailCarComponent {

  @Input() vehicle: ICar | undefined;

  constructor(
    private readonly snackBar: MatSnackBar,
  ) { }

  doReservation() {
    this.snackBar.open('Se reservó correctamente', 'bien');
  }
}
