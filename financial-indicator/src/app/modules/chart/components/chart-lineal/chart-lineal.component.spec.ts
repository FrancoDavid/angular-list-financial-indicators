import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { DetailRoutingModule } from 'src/app/modules/detail/detail-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FinancialService } from 'src/app/services/financial.service';

import { ChartLinealComponent } from './chart-lineal.component';

describe('ChartLinealComponent', () => {
  let component: ChartLinealComponent;
  let fixture: ComponentFixture<ChartLinealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartLinealComponent ],
      imports: [
        CommonModule,
        DetailRoutingModule,
        SharedModule,
        RouterTestingModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule
      ],
      providers: [
        FinancialService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLinealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
