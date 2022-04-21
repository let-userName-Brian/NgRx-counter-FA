import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./state/auth.effects";

const authRoutes: Routes = [
  { path: '', children: [
    { path: '', redirectTo: 'login'},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
  ]}
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
    RouterModule.forChild(authRoutes),
  ],
  exports: [],
  providers: [],
})
export class AuthModule {}