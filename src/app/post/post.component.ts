import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public posts:any=[];

  constructor(private _postService:PostService) { 
    this._postService.getPosts().subscribe(
      (data:any)=>{
        this.posts=data;
      },
      (error:any)=>{
        alert("internal server error");
      }
      )
    

    
  }

  ngOnInit(): void {
  }

}
