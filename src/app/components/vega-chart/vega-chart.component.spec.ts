import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegaChartComponent } from './vega-chart.component';

describe('VegaChartComponent', () => {
  let component: VegaChartComponent;
  let fixture: ComponentFixture<VegaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegaChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
