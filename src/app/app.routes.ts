import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'password',
    component: ForgotPasswordComponent,
  },
];
