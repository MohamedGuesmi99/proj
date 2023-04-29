import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignClientComponent } from './sign-client.component';

describe('SignClientComponent', () => {
  let component: SignClientComponent;
  let fixture: ComponentFixture<SignClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
