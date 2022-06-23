import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartIndicatorComponent } from './chart-indicator.component';

describe('ChartIndicatorComponent', () => {
  let component: ChartIndicatorComponent;
  let fixture: ComponentFixture<ChartIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartIndicatorComponent ]
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
