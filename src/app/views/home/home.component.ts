import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'rui-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
