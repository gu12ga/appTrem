import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiNovoPageRoutingModule } from './confi-novo-routing.module';

import { ConfiNovoPage } from './confi-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiNovoPageRoutingModule
  ],
  declarations: [ConfiNovoPage]
})
export class ConfiNovoPageModule {}
