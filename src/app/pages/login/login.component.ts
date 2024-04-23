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
  formValid: boolean = false;

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.formValid = this.loginForm.valid;
    });
  }

  get email() {
    return this.loginForm.controls['email'] as FormControl;
  }

  get password() {
    return this.loginForm.controls['password'] as FormControl;
  }

  submit() {
    console.log(this.loginForm.value);
  }
}
