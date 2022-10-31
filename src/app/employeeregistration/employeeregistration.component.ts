import { Component, OnInit } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.css']
})
export class EmployeeregistrationComponent implements OnInit {
  public name:string='';
  public age: number=0;
  public company:string="";
  public package:number=0;
  public percentage:number=0;
  public employees:any=[
    {name:'ajay',age:20,company:"tcs",package:10,percentage:10},
    {name:'anil',age:25,company:"hcl",package:15,percentage:15}
  ]


  constructor() { }

  ngOnInit(): void {
  }
  register(){
    let employee={
      name:this.name,
      age:this.age,
      company:this.company,
      package:this.package,
      percentage:this.percentage,
    }
    this.employees.push(employee);
    this.name="";
    this.age=0;
    this.company="";
    this.package=0;
    alert("Registered successfully!!!")
  }
  delete(i:number){
    this.employees.splice(i,1);
  }
  
  

}
