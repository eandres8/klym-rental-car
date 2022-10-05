import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const moduleList = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatProgressBarModule,
];

@NgModule({
  imports: moduleList,
  exports: moduleList,
})
export class MaterialModule { }
