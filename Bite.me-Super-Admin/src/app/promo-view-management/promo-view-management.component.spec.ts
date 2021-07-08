import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoViewManagementComponent } from './promo-view-management.component';

describe('PromoViewManagementComponent', () => {
  let component: PromoViewManagementComponent;
  let fixture: ComponentFixture<PromoViewManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoViewManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoViewManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
