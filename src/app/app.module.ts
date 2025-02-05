import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { ToursComponent } from './tours/tours.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './navbar/sidenav/sidenav.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './shared/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TourPageComponent } from './tour-page/tour-page.component';
import { TourPackageComponent } from './tours/tour-package/tour-package.component';
import { DestinationDescriptionComponent } from './destination-description/destination-description.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ExperiencesComponent,
    DestinationsComponent,
    ToursComponent,
    FooterComponent,
    SidenavComponent,
    TourPageComponent,
    TourPackageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    CommonModule
  ],
  exports: [ReactiveFormsModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
