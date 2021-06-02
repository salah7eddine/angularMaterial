import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutD3jsComponent } from './doughnut-d3js.component';

describe('DoughnutD3jsComponent', () => {
  let component: DoughnutD3jsComponent;
  let fixture: ComponentFixture<DoughnutD3jsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutD3jsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutD3jsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
