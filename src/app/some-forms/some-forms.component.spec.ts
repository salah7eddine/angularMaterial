import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeFormsComponent } from './some-forms.component';

describe('SomeFormsComponent', () => {
  let component: SomeFormsComponent;
  let fixture: ComponentFixture<SomeFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
