import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './lesComponents/home/home.component';
import { CinemaCComponent } from './lesComponents/cinema-c/cinema-c.component';
import { RestaurantCComponent } from './lesComponents/restaurant-c/restaurant-c.component';
import { HotelCComponent } from './lesComponents/hotel-c/hotel-c.component';
import { GuesthouseCComponent } from './lesComponents/guesthouse-c/guesthouse-c.component';
import { AboutusComponent } from './lesComponents/aboutus/aboutus.component';
import { ClientsComponent } from './lesComponents/clients/clients.component';
import { BlogComponent } from './lesComponents/blog/blog.component';
import { ReservationCComponent } from './lesComponents/reservation-c/reservation-c.component';
import { LoginComponent } from './lesComponents/login/login.component';
import { LoginClientComponent } from './lesComponents/login-client/login-client.component';
import { SignClientComponent } from './lesComponents/sign-client/sign-client.component';
import { ClientsListComponent } from './lesComponents/clients-list/clients-list.component';
import { ClientUpdateComponent } from './lesComponents/client-update/client-update.component';

const routes: Routes = [
  {path:'home', title:'home',component:HomeComponent},
  {path:'cinema', title:'cinema',component:CinemaCComponent},
  {path:'restaurant', title:'restaurant',component:RestaurantCComponent},
  {path:'hotel', title:'hotel',component:HotelCComponent},
  {path:'guesthouse', title:'guesthouse', component:GuesthouseCComponent},
  {path:'aboutus',title:'aboutus', component:AboutusComponent},
  {path:'clients',title:'clients', component:ClientsComponent},
  {path:'blog',title:'blog', component:BlogComponent},
  {path:'reservation',title:'reservation',component:ReservationCComponent},
  {path:'login',title:'login',component:LoginComponent},
  //hamewi
    {path:'loginClient',title:'login',component:LoginClientComponent},
  {path:'signClient',title:'sign',component:SignClientComponent},
  {path:'listClient',title:'login',component:ClientsListComponent},
  {path:'modifierClient/:id', title:'add',component:ClientUpdateComponent},

  {path:'', redirectTo:'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
