import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCComponent } from './restaurant-c.component';

describe('RestaurantCComponent', () => {
  let component: RestaurantCComponent;
  let fixture: ComponentFixture<RestaurantCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
