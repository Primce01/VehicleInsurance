import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsuranceListPageRoutingModule } from './insurance-list-routing.module';

import { InsuranceListPage } from './insurance-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InsuranceListPageRoutingModule
  ],
  declarations: [InsuranceListPage]
})
export class InsuranceListPageModule {}
