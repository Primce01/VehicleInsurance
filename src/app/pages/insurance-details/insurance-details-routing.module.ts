import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsuranceDetailsPage } from './insurance-details.page';

const routes: Routes = [
  {
    path: ':insurance_id',
    component: InsuranceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceDetailsPageRoutingModule {}
