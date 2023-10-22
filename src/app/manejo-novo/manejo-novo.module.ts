import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManejoNovoPageRoutingModule } from './manejo-novo-routing.module';

import { ManejoNovoPage } from './manejo-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManejoNovoPageRoutingModule
  ],
  declarations: [ManejoNovoPage]
})
export class ManejoNovoPageModule {}
