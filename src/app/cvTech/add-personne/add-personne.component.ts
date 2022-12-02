import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {CvService} from "../service/cv.service";

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {

  constructor(private router: Router, private cvService: CvService) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    console.log(form.value)
    this.cvService.addCv(form.value)
    this.router.navigate(['cvs'])
  }

}
