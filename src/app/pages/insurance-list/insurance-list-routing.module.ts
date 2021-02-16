import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsuranceListPage } from './insurance-list.page';

const routes: Routes = [
  {
    path: '',
    component: InsuranceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceListPageRoutingModule {}
