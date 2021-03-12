import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicenceListPageRoutingModule } from './licence-list-routing.module';

import { LicenceListPage } from './licence-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicenceListPageRoutingModule
  ],
  declarations: [LicenceListPage]
})
export class LicenceListPageModule {}
