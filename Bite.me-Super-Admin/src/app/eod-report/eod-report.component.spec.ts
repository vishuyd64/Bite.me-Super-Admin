import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EodReportComponent } from './eod-report.component';

describe('EodReportComponent', () => {
  let component: EodReportComponent;
  let fixture: ComponentFixture<EodReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EodReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EodReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
