import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _httpClient:HttpClient) { }
  getPosts():Observable<any>{
    return this._httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }
}
