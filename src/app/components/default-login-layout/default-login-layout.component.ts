import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  goToSignInPage() {
    this.router.navigate(['/sign-in']);
  }

  submit() {
    this.onSubmit.emit();
  }
}
