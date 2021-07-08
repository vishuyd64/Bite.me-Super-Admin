import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandRequestDetailComponent } from './brand-request-detail.component';

describe('BrandRequestDetailComponent', () => {
  let component: BrandRequestDetailComponent;
  let fixture: ComponentFixture<BrandRequestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandRequestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
