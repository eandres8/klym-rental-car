import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { ContentPageComponent } from './content-page/content-page.component';

@NgModule({
  declarations: [
    VehicleCardComponent,
    ContentPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    VehicleCardComponent,
    ContentPageComponent,
  ],
})
export class SharedModule { }
