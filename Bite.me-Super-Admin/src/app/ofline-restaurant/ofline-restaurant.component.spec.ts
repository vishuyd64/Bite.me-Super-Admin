import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OflineRestaurantComponent } from './ofline-restaurant.component';

describe('OflineRestaurantComponent', () => {
  let component: OflineRestaurantComponent;
  let fixture: ComponentFixture<OflineRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OflineRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OflineRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
