import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() control?: FormGroup | undefined;

  loginForm!: FormGroup;
  loginValid: boolean = false;

  constructor(public router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.loginValid = this.loginForm.valid;
    });
  }

  get email() {
    return this.loginForm.controls['email'] as FormControl;
  }

  get password() {
    return this.loginForm.controls['password'] as FormControl;
  }

  userMgmt() {
    this.router.navigate(['/userMgmt']);
    console.log('resete a senha', this.userMgmt);
  }

  submit() {
    console.log(this.loginForm.value);
  }
}
