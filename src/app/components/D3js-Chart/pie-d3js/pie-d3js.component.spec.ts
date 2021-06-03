import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieD3jsComponent } from './pie-d3js.component';

describe('PieD3jsComponent', () => {
  let component: PieD3jsComponent;
  let fixture: ComponentFixture<PieD3jsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieD3jsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieD3jsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
