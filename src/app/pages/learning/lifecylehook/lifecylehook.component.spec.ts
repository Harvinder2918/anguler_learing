import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecylehookComponent } from './lifecylehook.component';

describe('LifecylehookComponent', () => {
  let component: LifecylehookComponent;
  let fixture: ComponentFixture<LifecylehookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecylehookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecylehookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
