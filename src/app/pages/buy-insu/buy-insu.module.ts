import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyInsuPageRoutingModule } from './buy-insu-routing.module';

import { BuyInsuPage } from './buy-insu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyInsuPageRoutingModule
  ],
  declarations: [BuyInsuPage]
})
export class BuyInsuPageModule {}
