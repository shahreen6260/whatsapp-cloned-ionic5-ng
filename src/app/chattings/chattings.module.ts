import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChattingsPageRoutingModule } from './chattings-routing.module';

import { ChattingsPage } from './chattings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChattingsPageRoutingModule
  ],
  declarations: [ChattingsPage]
})
export class ChattingsPageModule {}
