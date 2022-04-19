import { createReducer, on } from "@ngrx/store";
import { initialState } from "./shared.state";
import { setShowLoading } from "./shared.actions";

const _sharedReducer = createReducer(
  initialState,
  on(setShowLoading, (state, action) => {
    return {
      state,
      showLoading: action.status
    }
  })
)

export function sharedReducer(state, action) {
  return _sharedReducer(state, action);
}