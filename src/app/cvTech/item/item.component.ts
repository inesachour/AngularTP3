import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cv} from "../model/cv";
import {CvService} from "../service/cv.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() cv! : Cv;
  constructor( private cvService : CvService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.cvService.showCv(this.cv)
  }

}
