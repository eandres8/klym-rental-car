import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { InputFilterComponent } from './components/input-filter/input-filter.component';
import { VehicleCardContainerComponent } from './components/vehicle-card-container/vehicle-card-container.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';

@NgModule({
  declarations: [
    DetailsPageComponent,
    MainPageComponent,
    InputFilterComponent,
    VehicleCardContainerComponent,
    FilterBrandPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule
  ],
})
export class CarsModule { }
