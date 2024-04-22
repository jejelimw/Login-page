import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() control?: FormGroup | undefined;

  loginForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),

      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  get email() {
    return this.loginForm.controls['email'] as FormControl;
  }

  get password() {
    return this.loginForm.controls['password'] as FormControl;
  }
  submit() {
    if (this.control?.invalid) {
      const emailControl = this.control.get('email');
      const passwordControl = this.control.get('password');

      if (emailControl?.invalid) {
        alert('Please fill in the email field.');
      }
      if (passwordControl?.invalid) {
        alert('Please fill in the password field.');
      }
      return;
    }
  }
}
