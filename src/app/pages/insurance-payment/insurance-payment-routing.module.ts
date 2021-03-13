import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsurancePaymentPage } from './insurance-payment.page';

const routes: Routes = [
  {
    path: '',
    component: InsurancePaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsurancePaymentPageRoutingModule {}
