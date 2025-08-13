import { Component } from '@angular/core';
import { Menu, Product } from '../../shared/model/menu';
import { MENU_MOCK } from '../../shared/mock';

interface Producto {
  category: string;
  img: string
}
@Component({
  selector: 'rui-store-view',
  standalone: true,
  imports: [],
  templateUrl: './store-view.component.html',
  styleUrl: './store-view.component.scss'
})
export class StoreViewComponent {
  public categories: string[] = [
    "Salad",
    "Junk food",
    "Desserts",
    "Steak",
    "Work food"
  ]


  public categorias: Producto[] = [
    { 
      category: "Salad",
      img: ""
    },
    { 
      category: "Junk food",
      img: ""
    },

  ]
  dishes: Menu = MENU_MOCK;

  
}
