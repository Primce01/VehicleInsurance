import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsuranceUpdatePageRoutingModule } from './insurance-update-routing.module';

import { InsuranceUpdatePage } from './insurance-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InsuranceUpdatePageRoutingModule
  ],
  declarations: [InsuranceUpdatePage]
})
export class InsuranceUpdatePageModule {}
