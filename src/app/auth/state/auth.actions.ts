import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const LOGIN_START = '[Auth] Login Start';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Fail';

export const SIGNUP_START = '[Auth] Signup Start';
export const SIGNUP_SUCCESS = '[Auth] Signup Success';
export const SIGNUP_FAIL = '[Auth] Signup Fail';

export const loginStart = createAction(LOGIN_START, props<{ email: string, password: string }>()); 
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: User }>()); 
export const loginFail = createAction(LOGIN_FAIL, props<{ error: any }>());

export const signupStart = createAction(SIGNUP_START, props<{ email: string, password: string }>());
export const signupSuccess = createAction(SIGNUP_SUCCESS, props<{ user: User }>());
export const signupFail = createAction(SIGNUP_FAIL, props<{ error: any }>());

