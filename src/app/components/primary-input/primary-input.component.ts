import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

type InputTypes = 'text' | 'email' | 'password' | 'name';

@Component({
  selector: 'app-primary-input',
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryInputComponent),
      multi: true,
    },
  ],
})
export class PrimaryInputComponent implements ControlValueAccessor, OnInit {
  @Input() type: InputTypes = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() inputName: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() disabled: boolean = false;

  ngOnInit() {
    this.control.valueChanges.subscribe(() => {
      this.onChange(this.control.value);
      this.onTouched();
    });
  }

  get isFormControl(): boolean {
    return this.control instanceof FormControl;
  }

  logControlState() {
    console.log('Control touched', this.control?.touched);
    console.log('Control Errors', this.control?.errors);
  }

  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {}
}
