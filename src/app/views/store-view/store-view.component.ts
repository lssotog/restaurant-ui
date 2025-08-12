import { Component } from '@angular/core';
import { Menu } from '../../shared/model/menu';

@Component({
  selector: 'rui-store-view',
  standalone: true,
  imports: [],
  templateUrl: './store-view.component.html',
  styleUrl: './store-view.component.scss'
})
export class StoreViewComponent {
  categories: Menu = []
}
