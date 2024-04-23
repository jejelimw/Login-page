import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControlOptions,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements OnInit {
  @Input() control?: FormControl | undefined;

  signInForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signInForm = this.fb.group(
      {
        name: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
        repeatPassword: [null, [Validators.required]],
      },
      { validator: this.passwordMatchValidator } as AbstractControlOptions
    );
  }

  get name() {
    return this.signInForm.controls['name'] as FormControl;
  }

  get email() {
    return this.signInForm.controls['email'] as FormControl;
  }

  get password() {
    return this.signInForm.controls['password'] as FormControl;
  }
  get repeatPassword() {
    return this.signInForm.controls['repeatPassword'] as FormControl;
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const repeatPassword = group.get('repeatPassword')?.value;

    if (password !== null && repeatPassword !== null) {
      return password === repeatPassword ? null : { passwordMismatch: true };
    }
    return null;
  }

  submit() {
    this.name.value;
    this.email.value;
    this.password.value;
    this.repeatPassword.value;
  }
}
