import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AuthResponseData } from "src/app/models/authModelResponseData.model";
import { AuthService } from "src/app/Services/auth.service";
import { AppState } from "src/app/store/app.state";
import { setErrorMessage, setShowLoading } from "src/app/store/shared/shared.actions";
import { autoLoginAction, AUTO_LOGIN_ACTION, loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.actions";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private store: Store<AppState>, private router: Router) { }

  login$ = createEffect((): any => {
    return this.actions$.pipe( // this.actions$ is the source of the observable
      ofType(loginStart), // listen to the action
      exhaustMap((action) => { // when the action is fired
        return this.authService.login(action.email, action.password).pipe( // call the service
          map((data: AuthResponseData) => { // map the response
            this.store.dispatch(setShowLoading({ status: false })); //dispatch the loading to false
            this.store.dispatch(setErrorMessage({ message: '' })); //dispatch the error to null
            const user = this.authService.formatUser(data); // format the response
            this.authService.setUserInLocalStorage(user)
            return loginSuccess({ user }); // dispatch the action
          }),
          catchError((errorResp): any => { // catch the error
            const errorMessage = this.authService.getErrorMessage(errorResp.error.error.message); // get the error message
            this.store.dispatch(setShowLoading({ status: false })); // dispatch the loading to false
            return of(setErrorMessage({ message: errorMessage })); // dispatch the error message
          })
        );
      })
    )
  });

  signup$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(signupStart),
      exhaustMap((action) => {
        return this.authService.signup(action.email, action.password).pipe(
          map((data: AuthResponseData) => {
            this.store.dispatch(setShowLoading({ status: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));
            const user = this.authService.formatUser(data);
            this.authService.setUserInLocalStorage(user)
            return loginSuccess({ user });
          }),
          catchError((errorResp): any => {
            const errorMessage = this.authService.getErrorMessage(errorResp.error.error.message);
            this.store.dispatch(setShowLoading({ status: false }));
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    )
  });

  loginRedirect$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(loginSuccess),
      tap(() => {
        this.router.navigate(['/']);
      })
    )
  }, { dispatch: false });

  autoLogin$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(autoLoginAction),
      map(() => {
        const user = this.authService.getUserFromLocalStorage();
        if (!user) {
          return setErrorMessage({ message: 'No user found' });
        }
        return loginSuccess({ user });
      })
    )
  }, { dispatch: false });

  }
