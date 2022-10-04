import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

const moduleList = [
  MatToolbarModule
];

@NgModule({
  imports: moduleList,
  exports: moduleList,
})
export class MaterialModule { }
