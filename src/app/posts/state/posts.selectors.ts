import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./posts.state";

const getPostState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(
  getPostState, (state) => {
    return state.posts
  }
)

export const getPostById = createSelector(
  getPostState, (state: any, props: any) => {
    const post = state.posts.find( (post: any) => post.id === props.id)
    return post ? post : null
  }
)
