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
    path: 'home',
    component: HomeComponent,
    title: appBaseTitle + 'Home'
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    title: appBaseTitle + 'Shopping cart'
  },
  {
    path: 'store',
    component: StoreViewComponent,
    title: appBaseTitle + 'Store'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
