import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterD3jsComponent } from './scatter-d3js.component';

describe('ScatterD3jsComponent', () => {
  let component: ScatterD3jsComponent;
  let fixture: ComponentFixture<ScatterD3jsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterD3jsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterD3jsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
