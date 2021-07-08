import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageParameterComponent } from './coverage-parameter.component';

describe('CoverageParameterComponent', () => {
  let component: CoverageParameterComponent;
  let fixture: ComponentFixture<CoverageParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverageParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
