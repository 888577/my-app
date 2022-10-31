import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  public id:string="";
  public vehicle:any="";

  constructor(private _vehicleService:VehicleService,private _activatedRoute:ActivatedRoute) { 
    this._activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        this._vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;

          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

}
