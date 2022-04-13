import { Action, createReducer, on } from "@ngrx/store";
import { CounterState, initialState } from "./counter.state";
import { increment, decrement, reset, customInput, changeChannelName } from "./counter.actions";

export const _counterReducer = createReducer(
  initialState,
  on(increment, state => ({ ...state, counter: state.counter + 1 })),
  on(decrement, state => ({ ...state, counter: state.counter - 1 })),
  on(reset, state => ({ ...state, counter: 0 })),
  on(customInput, (state, action) => ({ ...state, counter: state.counter + action.value })),
  on(changeChannelName, (state, action) => ({ ...state, channelName: action.channelName }))
)

export function counterReducer(state: CounterState | undefined, action: Action) {
  return _counterReducer(state, action);
}