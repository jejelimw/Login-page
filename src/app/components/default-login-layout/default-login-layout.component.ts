import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-login-layout',
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss',
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = '';
  @Input() primaryBtnText = '';
  @Input() secondaryBtnText = '';
  @Input() control?: FormGroup | undefined;
  @Input() loginValid: boolean = false;
  @Input() signValid: boolean = false;

  @Output('submit') onSubmit = new EventEmitter();

  loginError = false;

  user: SocialUser | undefined;
  loggedIn: boolean = false;

  constructor(public router: Router) {}

  goToLoginPage() {
    this.router.navigate(['/login']);
    console.log(this.goToLoginPage);
  }

  goToSignInPage() {
    this.router.navigate(['/sign-in']);
    console.log(this.goToSignInPage);
  }

  simulatorLoginError() {
    this.loginError = true;
  }

  login() {
    if (this.loginError) {
      this.simulatorLoginError;
    }
  }

  submit() {
    this.goToLoginPage();
    this.goToSignInPage();
    this.onSubmit.emit();
  }
}
