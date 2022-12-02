import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HeaderComponent } from './header/header.component';
import {RouterSimulatorComponent} from "./router-simulator/router-simulator.component";
import {CVComponent} from "./cvTech/cv/cv.component";
import {DetailComponent} from "./cvTech/detail/detail.component";
import {ListeComponent} from "./cvTech/liste/liste.component";
import {ItemComponent} from "./cvTech/item/item.component";
import {DefaultImagePipe} from "./cvTech/pipe/default-image.pipe";
import { CvDetailsComponent } from './cvTech/cv-details/cv-details.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { AddPersonneComponent } from './cvTech/add-personne/add-personne.component';
import { LoopImagesComponent } from './loop-images/loop-images.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    CVComponent,
    DetailComponent,
    ListeComponent,
    ItemComponent,
    DefaultImagePipe,
    CvDetailsComponent,
    LoginComponent,
    AddPersonneComponent,
    LoopImagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
