import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleDeletePage } from './vehicle-delete.page';

const routes: Routes = [
  {
    path: ':vehicle_id',
    component: VehicleDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleDeletePageRoutingModule {}
