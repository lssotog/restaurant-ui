import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { Router } from '@angular/router';
import { ButtonShape } from '../../shared/model/interfaces';

@Component({
  selector: 'rui-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  text: string = 'Get started';
  ariaLabel: string = 'Get started';  
  router = inject(Router);
  shape: ButtonShape = 'rounded';

  redirectToStoreView(){
    this.router.navigate(['store']);
  }
}
