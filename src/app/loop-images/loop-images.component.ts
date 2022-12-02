import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-loop-images',
  templateUrl: './loop-images.component.html',
  styleUrls: ['./loop-images.component.css']
})
export class LoopImagesComponent implements OnInit {


  images : string[] = ['insat.jpg','profile1.jpg', 'profile2.jpg']
  image : string = this.images[0]
  imageObservable$? : Observable<string>

  constructor() {}

  ngOnInit(): void {
    this.imageObservable$ = new Observable<string>(
      (observer) => {
        let i = this.images.length -1
        setInterval(() => {
          observer.next(this.images[i])
          if (i != 0) {
            i--;
          }
          else{
            i = this.images.length-1
          }

        }, 3000);
      });

    this.imageObservable$.subscribe(
      (val) => {
        this.image = val
      }
    );

  }


}
