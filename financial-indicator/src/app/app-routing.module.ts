import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./modules/main/main.module').then(module => module.MainModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./modules/detail/detail.module').then(module => module.DetailModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('./modules/chart/chart.module').then(module => module.ChartModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
