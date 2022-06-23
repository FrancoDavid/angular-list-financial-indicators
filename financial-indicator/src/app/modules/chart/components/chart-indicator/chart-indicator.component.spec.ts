import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { DetailRoutingModule } from 'src/app/modules/detail/detail-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FinancialService } from 'src/app/services/financial.service';

import { ChartIndicatorComponent } from './chart-indicator.component';

describe('ChartIndicatorComponent', () => {
  let component: ChartIndicatorComponent;
  let fixture: ComponentFixture<ChartIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartIndicatorComponent ],
      imports: [
        CommonModule,
        DetailRoutingModule,
        SharedModule,
        RouterTestingModule,
        HttpClientModule,
        ToastrModule.forRoot()
      ],
      providers: [
        FinancialService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
