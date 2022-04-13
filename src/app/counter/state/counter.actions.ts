import { createAction, props } from "@ngrx/store";


export const increment = createAction("[counter] increment");
export const decrement = createAction("[counter] decrement");
export const reset = createAction("[counter] reset");
export const customInput = createAction("[counter] custom input", props<{ value: number }>());
export const changeChannelName = createAction("[counter] change channel name", props<{ channelName: string }>());

