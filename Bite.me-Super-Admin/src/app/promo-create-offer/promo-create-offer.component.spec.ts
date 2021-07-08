import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCreateOfferComponent } from './promo-create-offer.component';

describe('PromoCreateOfferComponent', () => {
  let component: PromoCreateOfferComponent;
  let fixture: ComponentFixture<PromoCreateOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoCreateOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCreateOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
