import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  @Output('submit') onSubmit = new EventEmitter();
  @Input() control?: FormGroup | undefined;
  @Input() formValid: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  goToLoginPage() {
    this.router.navigate(['/login']);
    console.log(this.goToLoginPage);
  }

  goToSignInPage() {
    this.router.navigate(['/sign-in']);
    console.log(this.goToSignInPage);
  }

  submit() {
    this.goToLoginPage();
    this.onSubmit.emit();
  }
}
