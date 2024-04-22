import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WindowRefService } from '../../window-ref.service';

@Component({
  selector: 'app-default-login-layout',
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss',
})
export class DefaultLoginLayoutComponent implements OnInit {
  @Input() title: string = '';
  @Input() primaryBtnText = '';
  @Input() secondaryBtnText = '';
  @Output('submit') onSubmit = new EventEmitter();
  @Input() control?: FormGroup | undefined;

  constructor(
    private router: Router,
    private windowRefService: WindowRefService
  ) {}

  ngOnInit() {}

  areFieldsFilled(): boolean {
    const email = this.control?.get('email')?.value;
    const password = this.control?.get('password')?.value;
    return email && password;
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  goToSignInPage() {
    this.router.navigate(['/sign-in']);
  }

  submit() {
    if (this.areFieldsFilled()) {
      this.goToLoginPage();
    } else {
      const nativeWindow = this.windowRefService.nativeWindow;
      if (typeof window !== 'undefined' && window.alert) {
        window.alert('Please fill in the email and password field');
      } else {
        console.error('Window or alert method not available');
      }
    }
    this.onSubmit.emit();
  }
}
