import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth-service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../../logout-dialog/logout-dialog.component';

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

  email = '' as string;
  password = '' as string;
  loginError = false;
  loggedIn: boolean = false;

  constructor(
    public router: Router,
    public auth: AuthService,
    public dialog: MatDialog
  ) {}

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

  logError() {
    if (this.loginError) {
      this.simulatorLoginError;
    }
  }

  googleSignin() {
    console.log(this.googleSignin);
  }

  facebookSignin() {
    console.log(this.facebookSignin);
  }

  signOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  openLogoutDialog() {
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      data: { email: this.auth.user ? this.auth.user.email : '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'signOut') {
        this.signOut();
        console.log(this.signOut);
      }
    });
  }

  submit() {
    this.goToLoginPage();
    this.goToSignInPage();
    this.googleSignin();
    this.signOut();
    this.onSubmit.emit();
  }
}
