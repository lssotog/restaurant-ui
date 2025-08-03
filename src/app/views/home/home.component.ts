import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { Router } from '@angular/router';

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

  redirectToStoreView(){
    this.router.navigate(['store']);
  }
}
