import { ApplicationRef, NgModule } from '@angular/core';
import { DefaultLoginLayoutComponent } from './components/default-login-layout/default-login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ButtonComponent } from './button/button/button.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimaryInputComponent } from './components/primary-input/primary-input.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { WindowRefService } from './window-ref.service';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from '../auth-service';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    MatSlideToggleModule,
    MatIconModule,
    AppRoutingModule,
    AppComponent,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatDialogModule,
  ],

  declarations: [
    DefaultLoginLayoutComponent,
    LoginComponent,
    ButtonComponent,
    PrimaryInputComponent,
    SignInComponent,
    ForgotPasswordComponent,
    LogoutDialogComponent,
  ],
  providers: [
    // entryComponents: [MatDialogModule],
    WindowRefService,
    AuthService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    provideAnimationsAsync(),
  ],
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent); // Inicialize manualmente AppComponent
  }
}
