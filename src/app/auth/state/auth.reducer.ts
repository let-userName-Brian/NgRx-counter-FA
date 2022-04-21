import { Action, createReducer, on } from "@ngrx/store";
import { loginSuccess, signupStart, signupSuccess } from "./auth.actions";
import { initialState } from "./auth.state";

const _authReducer = createReducer(
  initialState, // initial state
  on(loginSuccess, (state, action) => { // loginSuccess is the action
    return {
      ...state, // spread the existing state
      user: action.user, // set the user
    }
  }),
  on(signupSuccess,
    (state, action) => {
      return {
        ...state,
        user: action.user,
      }
    })
)


export function authReducer(state: any, action: Action) {
  return _authReducer(state, action);
}