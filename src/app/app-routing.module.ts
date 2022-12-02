import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {CVComponent} from "./cvTech/cv/cv.component";
import {DetailComponent} from "./cvTech/detail/detail.component";
import {CvDetailsComponent} from "./cvTech/cv-details/cv-details.component";
import {LoginComponent} from "./login/login.component";
import {AddPersonneComponent} from "./cvTech/add-personne/add-personne.component";

const routes: Routes = [
  {path:'first', component: FirstComponent},
  {path:'second', component: SecondComponent},
  {path:'cvs', component: CVComponent},
  {path:'cv/:id', component: CvDetailsComponent},
  {path:'login', component: LoginComponent},
  {path:'add', component: AddPersonneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
