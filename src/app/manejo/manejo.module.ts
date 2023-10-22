import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManejoPageRoutingModule } from './manejo-routing.module';

import { ManejoPage } from './manejo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManejoPageRoutingModule
  ],
  declarations: [ManejoPage]
})
export class ManejoPageModule {}
