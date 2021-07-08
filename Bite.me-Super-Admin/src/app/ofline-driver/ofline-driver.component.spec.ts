import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OflineDriverComponent } from './ofline-driver.component';

describe('OflineDriverComponent', () => {
  let component: OflineDriverComponent;
  let fixture: ComponentFixture<OflineDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OflineDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OflineDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
