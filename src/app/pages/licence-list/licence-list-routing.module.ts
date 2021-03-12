import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenceListPage } from './licence-list.page';

const routes: Routes = [
  {
    path: '',
    component: LicenceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenceListPageRoutingModule {}
