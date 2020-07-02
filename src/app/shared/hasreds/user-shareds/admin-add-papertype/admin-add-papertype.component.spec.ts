import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPapertypeComponent } from './admin-add-papertype.component';

describe('AdminAddPapertypeComponent', () => {
  let component: AdminAddPapertypeComponent;
  let fixture: ComponentFixture<AdminAddPapertypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddPapertypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPapertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
