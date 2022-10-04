import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const moduleList = [
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: moduleList,
  exports: moduleList,
})
export class MaterialModule { }
