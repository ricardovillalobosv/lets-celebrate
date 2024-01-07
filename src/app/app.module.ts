import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { DateSectionComponent } from './components/date-section/date-section.component';
import { LocationSectionComponent } from './components/location-section/location-section.component';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RegisterItemsComponent } from './pages/register-items/register-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ItemsSectionComponent } from './components/items-section/items-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DateSectionComponent,
    LocationSectionComponent,
    HomeComponent,
    RegisterItemsComponent,
    SpinnerComponent,
    ItemsSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
