import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorsLayoutComponent } from './tutors-layout.component';

describe('TutorsLayoutComponent', () => {
  let component: TutorsLayoutComponent;
  let fixture: ComponentFixture<TutorsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
