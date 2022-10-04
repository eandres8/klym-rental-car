import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPageComponent } from './details-page/details-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputFilterComponent } from './components/input-filter/input-filter.component';

@NgModule({
  declarations: [
    DetailsPageComponent,
    MainPageComponent,
    InputFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ]
})
export class MainModule { }
