import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingGetComponent } from './booking-get.component';

describe('BookingGetComponent', () => {
  let component: BookingGetComponent;
  let fixture: ComponentFixture<BookingGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
