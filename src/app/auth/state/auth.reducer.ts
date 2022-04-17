import { Action, createReducer } from "@ngrx/store";
import { initialState } from "./auth.state";

const _authReducer = createReducer(initialState)
  

export function authReducer(state: any, action: Action){
  return _authReducer(state, action);
}