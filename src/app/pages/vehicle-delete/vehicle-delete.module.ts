import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleDeletePageRoutingModule } from './vehicle-delete-routing.module';

import { VehicleDeletePage } from './vehicle-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleDeletePageRoutingModule
  ],
  declarations: [VehicleDeletePage]
})
export class VehicleDeletePageModule {}
