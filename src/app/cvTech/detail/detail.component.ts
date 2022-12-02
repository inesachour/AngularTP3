import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../model/cv";
import {Router} from "@angular/router";
import {CvService} from "../service/cv.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private router: Router, private cvService : CvService) { }

  showedCv: Cv | null = null;

  ngOnInit(): void {
    this.cvService.cvObservable$.subscribe(
      (cv) => {
        this.showedCv = cv;
        console.log("tss")
      }
    )
  }

  showDetails(){
    this.router.navigate(['cv',this.showedCv!.id])
  }

}
