import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonShape, ButtonTheme } from '../../model/interfaces';
@Component({
  selector: 'rui-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true}) buttonText: string ='';
  @Input({ required: true}) ariaLabel: string = '';
  @Input() theme: ButtonTheme = 'primary'
  @Input() shape: ButtonShape = 'square'
  @Output() onClick = new EventEmitter<string>();
}
