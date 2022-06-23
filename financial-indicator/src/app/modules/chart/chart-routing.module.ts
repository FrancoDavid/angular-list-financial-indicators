import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartPageComponent } from './components/chart-page/chart-page.component';

const routes: Routes = [{
  path: ':type',
  component: ChartPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
