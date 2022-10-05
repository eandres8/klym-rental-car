import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { VehicleCardComponent } from './components/vehicle-card/vehicle-card.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { ErrorImageDirective } from './directives/error-image.directive';
import { NavbarLogoComponent } from './components/navbar-logo/navbar-logo.component';

@NgModule({
  declarations: [
    VehicleCardComponent,
    ContentPageComponent,
    ErrorImageDirective,
    NavbarLogoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    VehicleCardComponent,
    ContentPageComponent,
    ErrorImageDirective,
    NavbarLogoComponent,
  ],
})
export class SharedModule { }
