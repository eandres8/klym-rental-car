import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const moduleList = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
];

@NgModule({
  imports: moduleList,
  exports: moduleList,
})
export class MaterialModule { }