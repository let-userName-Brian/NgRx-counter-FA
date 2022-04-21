import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { signupStart } from '../state/auth.actions';
import { setShowLoading } from 'src/app/store/shared/shared.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSignup() {
    if (this.signupForm.valid) {
      const email = this.signupForm.value.email;
      const password = this.signupForm.value.password;
      this.store.dispatch(setShowLoading({ status: true }));
      this.store.dispatch(signupStart({ email, password }))
    }
  }
}
