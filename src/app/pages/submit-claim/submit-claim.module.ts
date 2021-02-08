import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitClaimPageRoutingModule } from './submit-claim-routing.module';

import { SubmitClaimPage } from './submit-claim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SubmitClaimPageRoutingModule
  ],
  declarations: [SubmitClaimPage]
})
export class SubmitClaimPageModule {}
