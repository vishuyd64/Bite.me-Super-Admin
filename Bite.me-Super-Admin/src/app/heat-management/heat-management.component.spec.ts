import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatManagementComponent } from './heat-management.component';

describe('HeatManagementComponent', () => {
  let component: HeatManagementComponent;
  let fixture: ComponentFixture<HeatManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
