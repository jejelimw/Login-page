import { NgModule } from '@angular/core';
import { DefaultLoginLayoutComponent } from './components/default-login-layout/default-login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ButtonComponent } from './button/button/button.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  declarations: [DefaultLoginLayoutComponent, LoginComponent, ButtonComponent],
  exports: [ButtonComponent, DefaultLoginLayoutComponent, LoginComponent],
})
export class AppModule {}
