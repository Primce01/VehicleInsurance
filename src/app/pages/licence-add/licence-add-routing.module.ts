import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenceAddPage } from './licence-add.page';

const routes: Routes = [
  {
    path: '',
    component: LicenceAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenceAddPageRoutingModule {}
