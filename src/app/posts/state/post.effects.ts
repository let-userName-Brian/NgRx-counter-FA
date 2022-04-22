import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { PostService } from "src/app/Services/post.service";
import { loadPosts, loadPostsSuccess, addPost } from "./posts.actions";

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) { }


  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      mergeMap(() => {
        return this.postService.getPosts().pipe(
          map(posts => {
            return loadPostsSuccess({ posts })
          })
        );
      })
    )
  });

  addPost$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postService.addPost(action.post).pipe(
          map(posts => {
            console.log(posts)
          })
        );
      })
    )
  })

}