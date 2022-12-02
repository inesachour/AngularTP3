import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Cv } from '../model/cv';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Input() cvs : Cv[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
