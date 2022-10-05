import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { InputFilterComponent } from './components/input-filter/input-filter.component';
import { VehicleCardContainerComponent } from './components/vehicle-card-container/vehicle-card-container.component';

@NgModule({
  declarations: [
    DetailsPageComponent,
    MainPageComponent,
    InputFilterComponent,
    VehicleCardContainerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
})
export class CarsModule { }
