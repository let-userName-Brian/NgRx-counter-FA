import { Action, createReducer, on } from "@ngrx/store";
import { addPost, editPost } from "./posts.actions";
import { initialState, PostState } from "./posts.state";

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
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
  })
)


export function postReducer(state: PostState | undefined, action: Action) {
  return _postReducer(state, action);
}