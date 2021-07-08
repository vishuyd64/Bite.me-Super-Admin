import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoManagementComponent } from './promo-management.component';

describe('PromoManagementComponent', () => {
  let component: PromoManagementComponent;
  let fixture: ComponentFixture<PromoManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
