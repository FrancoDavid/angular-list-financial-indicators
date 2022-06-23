import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLinealComponent } from './chart-lineal.component';

describe('ChartLinealComponent', () => {
  let component: ChartLinealComponent;
  let fixture: ComponentFixture<ChartLinealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartLinealComponent ]
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
