import { createAction, props } from "@ngrx/store";


export const SET_SHOW_LOADING = '[SHARED] SET_SHOW_LOADING';

export const setShowLoading = createAction(SET_SHOW_LOADING, props<{ status: boolean }>());