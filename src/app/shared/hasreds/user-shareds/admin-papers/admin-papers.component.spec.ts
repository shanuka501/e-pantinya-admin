import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPapersComponent } from './admin-papers.component';

describe('AdminPapersComponent', () => {
  let component: AdminPapersComponent;
  let fixture: ComponentFixture<AdminPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
