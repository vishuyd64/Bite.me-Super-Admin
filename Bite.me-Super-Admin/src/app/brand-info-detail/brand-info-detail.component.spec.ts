import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandInfoDetailComponent } from './brand-info-detail.component';

describe('BrandInfoDetailComponent', () => {
  let component: BrandInfoDetailComponent;
  let fixture: ComponentFixture<BrandInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
