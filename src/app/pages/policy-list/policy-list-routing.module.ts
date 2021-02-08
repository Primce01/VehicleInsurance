import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyListPage } from './policy-list.page';

const routes: Routes = [
  {
    path: '',
    component: PolicyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyListPageRoutingModule {}
