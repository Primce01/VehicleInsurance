import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicenceAddPageRoutingModule } from './licence-add-routing.module';

import { LicenceAddPage } from './licence-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LicenceAddPageRoutingModule
  ],
  declarations: [LicenceAddPage]
})
export class LicenceAddPageModule {}
