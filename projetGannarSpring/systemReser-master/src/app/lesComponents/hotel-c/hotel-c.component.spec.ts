import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCComponent } from './hotel-c.component';

describe('HotelCComponent', () => {
  let component: HotelCComponent;
  let fixture: ComponentFixture<HotelCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
