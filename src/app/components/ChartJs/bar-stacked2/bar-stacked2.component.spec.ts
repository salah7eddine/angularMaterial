import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarStacked2Component } from './bar-stacked2.component';

describe('BarStacked2Component', () => {
  let component: BarStacked2Component;
  let fixture: ComponentFixture<BarStacked2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarStacked2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarStacked2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
