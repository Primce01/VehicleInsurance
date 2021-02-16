import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsuranceDeletePageRoutingModule } from './insurance-delete-routing.module';

import { InsuranceDeletePage } from './insurance-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsuranceDeletePageRoutingModule
  ],
  declarations: [InsuranceDeletePage]
})
export class InsuranceDeletePageModule {}
