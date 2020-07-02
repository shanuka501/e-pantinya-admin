import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminessayComponent } from './adminessay.component';

describe('AdminessayComponent', () => {
  let component: AdminessayComponent;
  let fixture: ComponentFixture<AdminessayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminessayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminessayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
