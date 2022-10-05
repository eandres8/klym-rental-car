import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { VehicleCardComponent } from './components/vehicle-card/vehicle-card.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { ErrorImageDirective } from './directives/error-image.directive';

@NgModule({
  declarations: [
    VehicleCardComponent,
    ContentPageComponent,
    ErrorImageDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    VehicleCardComponent,
    ContentPageComponent,
    ErrorImageDirective,
  ],
})
export class SharedModule { }
