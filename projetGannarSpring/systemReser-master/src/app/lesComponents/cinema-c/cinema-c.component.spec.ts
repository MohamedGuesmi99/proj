import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaCComponent } from './cinema-c.component';

describe('CinemaCComponent', () => {
  let component: CinemaCComponent;
  let fixture: ComponentFixture<CinemaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
