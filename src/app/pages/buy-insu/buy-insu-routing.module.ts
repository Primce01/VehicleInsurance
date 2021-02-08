import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyInsuPage } from './buy-insu.page';

const routes: Routes = [
  {
    path: '',
    component: BuyInsuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyInsuPageRoutingModule {}
