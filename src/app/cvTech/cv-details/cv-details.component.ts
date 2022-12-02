import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CvService} from "../service/cv.service";
import {Cv} from "../model/cv";

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.css']
})
export class CvDetailsComponent implements OnInit {

  id : number = -1 //TODO
  cv : Cv;

  constructor(private activatedRouter:ActivatedRoute,private router: Router, private cvService : CvService) {
    activatedRouter.params.subscribe(params => { this.id = params['id']});
    console.log(this.id)
    this.cv = this.cvService.getCvById(this.id);
  }

  ngOnInit(): void {
  }

  deleteCv(){
    this.cvService.deleteCv(this.cv.id)
    this.router.navigate(['cvs'])
  }

}
