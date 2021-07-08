import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoverageComponent } from './add-coverage.component';

describe('AddCoverageComponent', () => {
  let component: AddCoverageComponent;
  let fixture: ComponentFixture<AddCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
