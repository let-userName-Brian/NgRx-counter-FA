import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";

@Injectable({ providedIn: "root" })
export class PostService {
  randomNumber = 9
  constructor(private http: HttpClient) {}


  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://ngrx-6ddc5-default-rtdb.firebaseio.com/.json`);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.put<Post>(`https://ngrx-6ddc5-default-rtdb.firebaseio.com/${this.randomNumber += 1}.json`, post);
  }
}
