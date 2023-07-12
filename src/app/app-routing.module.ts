import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { OtherservicesComponent } from './otherservices/otherservices.component';
import { BookaserviceComponent } from './bookaservice/bookaservice.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'dogs', component:DogsComponent},
  {path:'cats', component:CatsComponent},
  {path:'otherservices', component:OtherservicesComponent},
  {path:'bookaservice', component:BookaserviceComponent},
  {path:'about', component:AboutComponent},
  {path:'contactus',component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
