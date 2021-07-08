import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineManangementComponent } from './cuisine-manangement.component';

describe('CuisineManangementComponent', () => {
  let component: CuisineManangementComponent;
  let fixture: ComponentFixture<CuisineManangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuisineManangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisineManangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
