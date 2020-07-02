import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmcqComponent } from './adminmcq.component';

describe('AdminmcqComponent', () => {
  let component: AdminmcqComponent;
  let fixture: ComponentFixture<AdminmcqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmcqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
