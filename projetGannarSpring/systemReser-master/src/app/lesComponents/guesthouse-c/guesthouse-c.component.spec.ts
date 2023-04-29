import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesthouseCComponent } from './guesthouse-c.component';

describe('GuesthouseCComponent', () => {
  let component: GuesthouseCComponent;
  let fixture: ComponentFixture<GuesthouseCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuesthouseCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuesthouseCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
