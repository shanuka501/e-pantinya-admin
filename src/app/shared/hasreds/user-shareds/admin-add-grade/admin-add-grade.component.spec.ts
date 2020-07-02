import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddGradeComponent } from './admin-add-grade.component';

describe('AdminAddGradeComponent', () => {
  let component: AdminAddGradeComponent;
  let fixture: ComponentFixture<AdminAddGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
