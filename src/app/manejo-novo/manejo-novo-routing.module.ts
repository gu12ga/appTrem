import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManejoNovoPage } from './manejo-novo.page';

const routes: Routes = [
  {
    path: '',
    component: ManejoNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManejoNovoPageRoutingModule {}
