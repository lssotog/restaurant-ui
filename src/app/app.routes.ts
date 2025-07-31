import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { StoreViewComponent } from './views/store-view/store-view.component';
import { NgModule } from '@angular/core';

const appBaseTitle: string = 'Restaurant UI - '
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: appBaseTitle + 'Home'
  },
  {
    path: 'Home',
    component: HomeComponent,
    title: appBaseTitle + 'Home'
  },
  {
    path: 'Shopping cart',
    component: ShoppingCartComponent,
    title: appBaseTitle + 'Shopping cart'
  },
  {
    path: 'Store',
    component: StoreViewComponent,
    title: appBaseTitle + 'Store'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
