import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthResponseData } from "src/app/models/authModelResponseData.model";
import { AuthService } from "src/app/Services/auth.service";
import { AppState } from "src/app/store/app.state";
import { setErrorMessage, setShowLoading } from "src/app/store/shared/shared.actions";
import { loginStart, loginSuccess } from "./auth.actions";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private store: Store<AppState>) { }

  login$ = createEffect((): any => {
    return this.actions$.pipe( // this.actions$ is the source of the observable
      ofType(loginStart), // listen to the action
      exhaustMap((action) => { // when the action is fired
        return this.authService.login(action.email, action.password).pipe( // call the service
          map((data: AuthResponseData) => { // map the response
            this.store.dispatch(setShowLoading({ status: false })); //dispatch the loading to false
            this.store.dispatch(setErrorMessage({ message: '' })); //dispatch the error to null
            const user = this.authService.formatUser(data); // format the response
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
  })
}
