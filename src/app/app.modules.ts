import { NgModule } from '@angular/core';
import { DefaultLoginLayoutComponent } from './components/default-login-layout/default-login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ButtonComponent } from './button/button/button.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimaryInputComponent } from './components/primary-input/primary-input.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
  ],
  declarations: [
    DefaultLoginLayoutComponent,
    LoginComponent,
    ButtonComponent,
    PrimaryInputComponent,
    SignInComponent,
  ],
  exports: [
    ButtonComponent,
    DefaultLoginLayoutComponent,
    LoginComponent,
    PrimaryInputComponent,
    SignInComponent,
  ],
})
export class AppModule {}
