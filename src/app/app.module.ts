import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { DateSectionComponent } from './date-section/date-section.component';
import { LocationSectionComponent } from './location-section/location-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DateSectionComponent,
    LocationSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
