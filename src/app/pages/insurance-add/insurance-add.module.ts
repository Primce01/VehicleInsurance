import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsuranceAddPageRoutingModule } from './insurance-add-routing.module';

import { InsuranceAddPage } from './insurance-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InsuranceAddPageRoutingModule
  ],
  declarations: [InsuranceAddPage]
})
export class InsuranceAddPageModule {}
