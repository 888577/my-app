import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  public side: number=0;
  public result: number=0;

  constructor() { }

  ngOnInit(): void {
  }
  area(){
    this.result=this.side * this.side;
  }
  perimeter(){
    this.result=4 * this.side;
  }

}
