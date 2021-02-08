import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicyListPageRoutingModule } from './policy-list-routing.module';

import { PolicyListPage } from './policy-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicyListPageRoutingModule
  ],
  declarations: [PolicyListPage]
})
export class PolicyListPageModule {}
