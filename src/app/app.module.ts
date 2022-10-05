import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { appReducers } from './app.store';
import { AppComponent } from './app.component';
import { CarsModule } from './modules/cars/cars.module';
import { CarsEffects } from './modules/cars/store/cars.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([CarsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
