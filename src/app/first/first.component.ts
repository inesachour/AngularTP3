import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  color : string = '#000000';
  size : number = 16;
  family : string = 'Arial';

  constructor() { }

  ngOnInit(): void {
  }

}
