import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartPageComponent } from './components/chart-page/chart-page.component';
import { ChartIndicatorComponent } from './components/chart-indicator/chart-indicator.component';
import { SharedModule } from '../shared/shared.module';
import { ChartLinealComponent } from './components/chart-lineal/chart-lineal.component';
import { FinancialService } from 'src/app/services/financial.service';


@NgModule({
  declarations: [ChartPageComponent, ChartIndicatorComponent, ChartLinealComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    SharedModule
  ],
  providers: [
    FinancialService
  ]
})
export class ChartModule { }
