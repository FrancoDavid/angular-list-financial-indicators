import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FinancialService } from 'src/app/services/financial.service';
import { DetailRoutingModule } from '../../detail-routing.module';

import { DetailPageComponent } from './detail-page.component';

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ DetailPageComponent ],
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
    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
