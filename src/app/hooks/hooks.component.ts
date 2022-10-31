import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() a:string='';

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
   console.log("ngOnChanges"); 
  }
  ngOnInit(): void {
    console.log("ngonInit");

  }
  ngDoCheck(): void {
    console.log("ngDoCheck");  
    }
    ngAfterContentInit(): void {
      console.log("ngAfterContentInit");
  
    }
    ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked");
  
  
    }
    ngAfterViewInit(): void {
      console.log("ngAfterViewInit");
  
    }
  
  

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }



}
  
