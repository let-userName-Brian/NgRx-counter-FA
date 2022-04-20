import { createAction, props } from "@ngrx/store";


export const SET_SHOW_LOADING = '[SHARED] SET_SHOW_LOADING';
export const SET_ERROR_MESSAGE = '[SHARED] SET_ERROR_MESSAGE';

export const setShowLoading = createAction(SET_SHOW_LOADING, props<{ status: boolean }>());
export const setErrorMessage = createAction(SET_ERROR_MESSAGE, props<{ message: string }>());