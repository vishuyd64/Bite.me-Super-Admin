import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandInfoQrComponent } from './brand-info-qr.component';

describe('BrandInfoQrComponent', () => {
  let component: BrandInfoQrComponent;
  let fixture: ComponentFixture<BrandInfoQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandInfoQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandInfoQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
