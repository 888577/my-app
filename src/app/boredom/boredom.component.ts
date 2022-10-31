import { Component, OnInit } from '@angular/core';
import { BoredomService } from '../boredom.service';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.component.html',
  styleUrls: ['./boredom.component.css']
})
export class BoredomComponent implements OnInit {

  public boredom:any = {};

  constructor(private _boredomService:BoredomService) { 
    this._boredomService.getBoredoms().subscribe(
      (data:any)=>{
        this.boredom=data;
      },
      (error:any)=>{
        alert("internal server error");
      }
    )
  }

  ngOnInit(): void {
  }

}
