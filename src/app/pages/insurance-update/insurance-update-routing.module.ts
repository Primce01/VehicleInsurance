import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsuranceUpdatePage } from './insurance-update.page';

const routes: Routes = [
  {
    path: '',
    component: InsuranceUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceUpdatePageRoutingModule {}
