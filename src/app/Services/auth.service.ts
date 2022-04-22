import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthResponseData } from "../models/authModelResponseData.model";
import { User } from "../models/user.model";

@Injectable({ providedIn: "root" })
export class AuthService {
  timeoutInterval: any;
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
      { email, password, returnSecureToken: true })
  }

  formatUser(data: AuthResponseData) {
    const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000); // +data.expiresIn * 1000 is the number of milliseconds in the future
    const user = new User(
      data.email,
      data.idToken,
      data.localId,
      expirationDate
    )
    return user;
  }

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`,
      { email, password, returnSecureToken: true })
  }

  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'This email does not exist';
      case 'INVALID_PASSWORD':
        return 'This password is not correct';
      case 'USER_DISABLED':
        return 'This user is disabled';
      default:
        return 'An unknown error occurred';
    }
  };

  setUserInLocalStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));

    const todaysDate = new Date().getTime();
    const expirationDate = user.getExpirationDate().getTime();
    const timeInterval = expirationDate - todaysDate;

    this.timeoutInterval = setTimeout(() => {
      localStorage.removeItem('user');
    }, timeInterval);
  }

  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const expirationDate = new Date(userData.expirationDate);
      const user = new User(
        userData.email,
        userData.token,
        userData.localId,
        expirationDate
      )
      
      return user;
    }
    return null;
  }
}