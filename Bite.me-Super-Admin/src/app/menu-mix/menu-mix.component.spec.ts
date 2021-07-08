import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMixComponent } from './menu-mix.component';

describe('MenuMixComponent', () => {
  let component: MenuMixComponent;
  let fixture: ComponentFixture<MenuMixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
