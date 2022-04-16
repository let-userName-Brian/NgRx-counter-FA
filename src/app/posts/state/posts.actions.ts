import { createAction, props } from "@ngrx/store";
import { Post } from "../../models/post.model";

export const ADD_POST_ACTION = '[Posts] Add Post';
export const EDIT_POST_ACTION = '[Posts] Edit Post';
export const DELETE_POST_ACTION = '[Posts] Delete Post';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
export const editPost = createAction(EDIT_POST_ACTION, props<{ post: Post }>());
export const deletePost = createAction(DELETE_POST_ACTION, props<{ id: any }>());