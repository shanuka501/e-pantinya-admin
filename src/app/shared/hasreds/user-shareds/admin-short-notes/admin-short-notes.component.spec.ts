import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShortNotesComponent } from './admin-short-notes.component';

describe('AdminShortNotesComponent', () => {
  let component: AdminShortNotesComponent;
  let fixture: ComponentFixture<AdminShortNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminShortNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShortNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
