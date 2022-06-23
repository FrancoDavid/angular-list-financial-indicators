import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { DetailRoutingModule } from 'src/app/modules/detail/detail-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FinancialService } from 'src/app/services/financial.service';

import { ChartPageComponent } from './chart-page.component';

describe('ChartPageComponent', () => {
  let component: ChartPageComponent;
  let fixture: ComponentFixture<ChartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPageComponent ],
      imports: [
        CommonModule,
        DetailRoutingModule,
        SharedModule,
        RouterTestingModule,
        HttpClientModule,
        ToastrModule.forRoot()
      ],
      providers: [
        FinancialService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: {type: 'Dollar'}}
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
