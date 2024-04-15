import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() width: string = 'w-120';
  @Input() height: string = 'h-13';
  @Input() style: string = '';

  @Output() clickEvent = new EventEmitter<void>();

  onClick() {
    this.clickEvent.emit();
    console.log(this.clickEvent);
  }
}