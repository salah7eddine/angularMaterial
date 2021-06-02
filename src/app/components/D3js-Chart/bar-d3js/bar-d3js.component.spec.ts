import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarD3jsComponent } from './bar-d3js.component';

describe('BarD3jsComponent', () => {
  let component: BarD3jsComponent;
  let fixture: ComponentFixture<BarD3jsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarD3jsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarD3jsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
