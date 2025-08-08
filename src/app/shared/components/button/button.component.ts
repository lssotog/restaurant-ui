import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonShape, ButtonTheme } from '../../model/interfaces';
import { CommonModule, NgClass } from '@angular/common';
@Component({
  selector: 'rui-button',
  standalone: true,
  imports: [ NgClass ],
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
