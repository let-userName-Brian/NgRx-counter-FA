import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./posts.state";

export const POST_STATE_NAME = 'posts';

const getPostState = createFeatureSelector<PostState>(POST_STATE_NAME);

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
