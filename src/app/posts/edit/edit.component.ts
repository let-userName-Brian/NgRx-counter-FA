import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selectors';
import { editPost } from '../state/posts.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  postForm!: FormGroup;
  post!: Post | undefined;
  postSub!: Subscription
  constructor(
    private route: ActivatedRoute, 
    private store: Store<AppState>,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.postSub = this.store.select(getPostById, { id }).subscribe(data => {
        this.post = data;
        this.createForm()
      })
    })
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post?.description, [Validators.required, Validators.minLength(10)])
    })
  }


  onUpdatePost() {
    if (!this.postForm.valid) {
      return
    }
    const title = this.postForm.value.title;
    const description = this.postForm.value.description;
    const post: Post = { 
      id: this.post?.id,
      title,
      description
    }
    this.store.dispatch(editPost({ post }))
    this.router.navigate(['/posts'])
  }

  ngOnDestroy() {
    this.postSub?.unsubscribe()
  }
}
