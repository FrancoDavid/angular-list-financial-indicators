import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DetailPageComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule
  ]
})
export class DetailModule { }
