import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rui-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonText: string ='';
  @Input({ required: true}) ariaLabel: string = '';
  @Output() onClick = new EventEmitter<string>();
}
