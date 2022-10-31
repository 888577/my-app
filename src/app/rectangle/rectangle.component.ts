import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

 public length: number=0;
 public breadth: number=0;
 public result: number=0;


  constructor() { }

  ngOnInit(): void {
  }
  area(){
    this.result= this.length * this.breadth;
  
  }
  perimeter(){
    this.result = 2*(this.length + this.breadth);
  }

}
