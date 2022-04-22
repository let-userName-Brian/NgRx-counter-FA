import { Action, createReducer, on } from "@ngrx/store";
import { editPost, deletePost, loadPostsSuccess, addPostSuccess } from "./posts.actions";
import { initialState, PostState } from "./posts.state";

const _postReducer = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    let post = { ...action.post };
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post]
    };
  }),
  on(editPost, (state, action) => {
    let post = { ...action.post };
    let posts = [...state.posts];
    let index = posts.findIndex(p => p.id === post.id);
    posts[index] = post;
    return {
      ...state,
      posts: posts
    };
  }),
  on(deletePost, (state, action) => {
    let posts = [...state.posts];
    let index = posts.findIndex(p => p.id === action.id);
    posts.splice(index, 1);
    return {
      ...state,
      posts: posts
    };
  }),
  on(loadPostsSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts
    };
  })
)


export function postReducer(state: PostState | undefined, action: Action) {
  return _postReducer(state, action);
}