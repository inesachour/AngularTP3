import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private cvSubject : Subject<Cv> = new Subject<Cv>();
  public cvObservable$ = this.cvSubject.asObservable()

  private cvs :Cv[] = [
    new Cv(
      0, "Achour", "Ines", 22, 11111111, "Student",""
    ),
    new Cv(
      1, "Sammari", "Amal", 2, 22222222, "Student2","profile2.jpg"
    ),
    new Cv(
      2, "X", "Y", 2, 22222222, "Student2","    "
    ),
  ];

  constructor() { }

  getCvs(): Cv[]{
    return this.cvs;
  }

  getCvById(id : number) : Cv {
    return this.cvs.find(cv => cv.id == id)!!; //TODO
  }

  deleteCv(id:number){
    const index = this.cvs.findIndex(cv => cv.id == id);
    if (index > -1) {
      this.cvs.splice(index, 1);
    }
    console.log(this.cvs)
  }

  addCv(cv : Cv){
    cv.id = this.cvs[this.cvs.length-1].id++
    this.cvs.push(cv)
  }

  showCv(cv : Cv){
    this.cvSubject.next(cv)
  }
}
