import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from './components/loading/loading.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgxChartsModule
  ],
  exports: [
    NgbModule,
    LoadingComponent,
    NgxChartsModule
  ]
})
export class SharedModule { }
