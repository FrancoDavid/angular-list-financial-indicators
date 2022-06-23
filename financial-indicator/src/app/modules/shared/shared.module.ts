import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NgbModule,
    LoadingComponent
  ]
})
export class SharedModule { }
