import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicenceDetailsPageRoutingModule } from './licence-details-routing.module';

import { LicenceDetailsPage } from './licence-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicenceDetailsPageRoutingModule
  ],
  declarations: [LicenceDetailsPage]
})
export class LicenceDetailsPageModule {}
