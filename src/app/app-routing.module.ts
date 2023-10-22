import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'alerta',
    loadChildren: () => import('./alerta/alerta.module').then( m => m.AlertaPageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },
  {
    path: 'manejo',
    loadChildren: () => import('./manejo/manejo.module').then( m => m.ManejoPageModule)
  },
  {
    path: 'manejo/:dataPulverizacao/:dataArmadilha/:quantP/:produto/:regiao',
    loadChildren: () => import('./manejo/manejo.module').then( m => m.ManejoPageModule)
  },
  {
    path: 'manejo-novo',
    loadChildren: () => import('./manejo-novo/manejo-novo.module').then( m => m.ManejoNovoPageModule)
  },
  {
    path: 'manejo-novo/:dataPulverizacao/:dataArmadilha/:quantP/:produto/:regiao',
    loadChildren: () => import('./manejo/manejo.module').then( m => m.ManejoPageModule)
  },
  {
    path: 'confi',
    loadChildren: () => import('./confi/confi.module').then( m => m.ConfiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
