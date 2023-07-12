import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { OtherservicesComponent } from './otherservices/otherservices.component';
import { BookaserviceComponent } from './bookaservice/bookaservice.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DogsComponent,
    CatsComponent,
    OtherservicesComponent,
    BookaserviceComponent,
    AboutComponent,
    ContactusComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
