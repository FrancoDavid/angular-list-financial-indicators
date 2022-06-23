import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { FinancialService } from './financial.service';

describe('FinancialService', () => {
  let service: FinancialService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
