import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './modules/main/main-page/main-page.component';
import { DetailsPageComponent } from './modules/main/details-page/details-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'details/:id', component: DetailsPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
