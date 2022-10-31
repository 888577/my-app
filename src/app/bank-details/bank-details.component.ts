import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  public id:string="";
  public account:any="";

  constructor(private _bankService:BankService,private _activatedRoute:ActivatedRoute) {
    this._activatedRoute.params.subscribe(
      (data:any)=>{
        this.id =data.id;
        this._bankService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.account=data;
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }

}
