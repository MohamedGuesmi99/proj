import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReservationCComponent } from './lesComponents/reservation-c/reservation-c.component';
import { NavComponent } from './lesComponents/nav/nav.component';
import { HomeComponent } from './lesComponents/home/home.component';
import { RestaurantCComponent } from './lesComponents/restaurant-c/restaurant-c.component';
import { CinemaCComponent } from './lesComponents/cinema-c/cinema-c.component';
import { HotelCComponent } from './lesComponents/hotel-c/hotel-c.component';
import { GuesthouseCComponent } from './lesComponents/guesthouse-c/guesthouse-c.component';
import { AboutusComponent } from './lesComponents/aboutus/aboutus.component';
import { ClientsComponent } from './lesComponents/clients/clients.component';
import { BlogComponent } from './lesComponents/blog/blog.component';
import { LoginComponent } from './lesComponents/login/login.component';
import { AdminComponent } from './lesComponents/admin/admin.component';
import { SignClientComponent } from './lesComponents/sign-client/sign-client.component';
import { LoginClientComponent } from './lesComponents/login-client/login-client.component';
import { ClientsListComponent } from './lesComponents/clients-list/clients-list.component';
import { ClientUpdateComponent } from './lesComponents/client-update/client-update.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservationCComponent,
    NavComponent,
    HomeComponent,
    RestaurantCComponent,
    CinemaCComponent,
    HotelCComponent,
    GuesthouseCComponent,
    AboutusComponent,
    ClientsComponent,
    BlogComponent,
    LoginComponent,
    AdminComponent,
    SignClientComponent,
    LoginClientComponent,
    ClientsListComponent,
    ClientUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
