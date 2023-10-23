import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiNovoPage } from './confi-novo.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiNovoPageRoutingModule {}
