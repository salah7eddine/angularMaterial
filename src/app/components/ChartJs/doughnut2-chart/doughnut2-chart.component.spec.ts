import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doughnut2ChartComponent } from './doughnut2-chart.component';

describe('Doughnut2ChartComponent', () => {
  let component: Doughnut2ChartComponent;
  let fixture: ComponentFixture<Doughnut2ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Doughnut2ChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Doughnut2ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
