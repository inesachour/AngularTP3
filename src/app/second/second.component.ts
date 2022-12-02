import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  color: string = "lightGreen";
  constructor() { }

  ngOnInit(): void {
  }

  colorChange(color : string){
    this.color = color;
  }

  defaultColor(){
    this.color = "lightGreen"
  }


}
