import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationMmanagerComponent } from './notification-mmanager.component';

describe('NotificationMmanagerComponent', () => {
  let component: NotificationMmanagerComponent;
  let fixture: ComponentFixture<NotificationMmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationMmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationMmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
