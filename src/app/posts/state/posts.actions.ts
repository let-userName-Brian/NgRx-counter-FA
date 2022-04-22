import { createAction, props } from "@ngrx/store";
import { Post } from "../../models/post.model";

export const ADD_POST_ACTION = '[Posts] Add Post';
export const ADD_POST_ACTION_SUCCESS = '[Posts] Add Post Success';
export const ADD_POST_ACTION_FAIL = '[Posts] Add Post Fail';

export const EDIT_POST_ACTION = '[Posts] Edit Post';
export const DELETE_POST_ACTION = '[Posts] Delete Post';

export const LOAD_POSTS_ACTION = '[Posts] Load Posts';
export const LOAD_POSTS_SUCCESS_ACTION = '[Posts] Load Posts Success';
export const LOAD_POSTS_FAIL_ACTION = '[Posts] Load Posts Fail';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
export const addPostSuccess = createAction(ADD_POST_ACTION_SUCCESS, props<{ post: Post }>());
export const addPostFail = createAction(ADD_POST_ACTION_FAIL, props<{ error: any }>());

export const editPost = createAction(EDIT_POST_ACTION, props<{ post: Post }>());
export const deletePost = createAction(DELETE_POST_ACTION, props<{ id: any }>());

export const loadPosts = createAction(LOAD_POSTS_ACTION);
export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCESS_ACTION, props<{ posts: Post[] }>());
export const loadPostsFail = createAction(LOAD_POSTS_FAIL_ACTION, props<{ error: any }>());