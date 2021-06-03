import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaD3jsComponent } from './area-d3js.component';

describe('AreaD3jsComponent', () => {
  let component: AreaD3jsComponent;
  let fixture: ComponentFixture<AreaD3jsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaD3jsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaD3jsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
