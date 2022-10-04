import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DetailsPageComponent } from './details-page/details-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DetailsPageComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class MainModule { }
