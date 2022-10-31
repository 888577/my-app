import { Component, OnInit } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {
  public flipkarts:any=[];

  constructor(private _flipkartService:FlipkartService) { 
  this._flipkartService.getFlipkarts().subscribe(
    (data:any)=>{
      this.flipkarts=data;
    },
    (error:any)=>{
      alert("internal server error");
    }
  )
  }
  ngOnInit(): void {
  }

}
