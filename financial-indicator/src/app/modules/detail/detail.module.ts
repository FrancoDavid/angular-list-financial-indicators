import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { SharedModule } from '../shared/shared.module';
import { FinancialService } from 'src/app/services/financial.service';
import { FormatDatePipe } from './pipes/format-date.pipe';


@NgModule({
  declarations: [DetailPageComponent, FormatDatePipe],
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule
  ],
  providers: [FinancialService]
})
export class DetailModule { }
