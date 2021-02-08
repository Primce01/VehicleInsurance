import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleEditPage } from './vehicle-edit.page';

const routes: Routes = [
  {
    path: ':vehicle_id',
    component: VehicleEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleEditPageRoutingModule {}
