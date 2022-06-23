import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FinancialService } from 'src/app/services/financial.service';
import { DetailRoutingModule } from '../../detail-routing.module';

import { TableIndicatorComponent } from './table-indicator.component';

describe('TableIndicatorComponent', () => {
  let component: TableIndicatorComponent;
  let fixture: ComponentFixture<TableIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableIndicatorComponent ],
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
    fixture = TestBed.createComponent(TableIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
