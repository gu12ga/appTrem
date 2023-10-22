import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManejoPage } from './manejo.page';

const routes: Routes = [
  {
    path: '',
    component: ManejoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManejoPageRoutingModule {}
