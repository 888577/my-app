import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  public vehicles:any=[];
  public term:string="";
  public column:string="";
  public order:string="";

  constructor(private _vehicleService:VehicleService,private router:Router) {
    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (error:any)=>{
        alert("internal server error");
      }
    )
   }


  ngOnInit(): void {
  }
  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
    )

  }
  pagination(page:number){
    this._vehicleService.getPagedVehicles(page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  sort(){
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("deleted successfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error");

      }
    )
  }
  view(id:string){
    this.router.navigateByUrl('/dashboard/vehicle-details/'+id);
  }
  
  

}
