import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsurancePaymentPageRoutingModule } from './insurance-payment-routing.module';

import { InsurancePaymentPage } from './insurance-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InsurancePaymentPageRoutingModule
  ],
  declarations: [InsurancePaymentPage]
})
export class InsurancePaymentPageModule {}
