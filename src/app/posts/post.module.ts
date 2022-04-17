import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { PostsListComponent } from "./posts-list/posts-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditComponent } from "./edit/edit.component";

const postRoutes: Routes = [
  {
    path: '', component: PostsListComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'edit/:id', component: EditComponent }
    ]
  }
];

@NgModule({
  declarations: [
    PostsListComponent,
    AddPostComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(postRoutes)
  ],
})
export class PostModule {}