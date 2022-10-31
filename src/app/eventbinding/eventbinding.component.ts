import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  test(){
    alert("clicked");
  }
  test2(){
    alert("double clicked");
  }
  test3(){
    alert("key up");
  }
  test4(){
    alert("key down");

  }
  test5(){
    alert("key press") 
  }
  test6(){
    alert("mouse enter");

}
test7(){
  alert("mouse leave")
}
}