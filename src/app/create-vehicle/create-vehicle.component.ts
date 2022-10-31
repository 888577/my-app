import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {
  public vehicleForm:FormGroup=new FormGroup(
    {
      vehicle:new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      fuel:new FormControl(),
      color:new FormControl(),
      type:new FormControl()
    }
  )

  constructor(private _vehicleService:VehicleService) { }

  ngOnInit(): void {
  }
  submit(){
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("created successfully!!!");
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

}
