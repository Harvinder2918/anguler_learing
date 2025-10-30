import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyformtestComponent } from './myformtest.component';

describe('MyformtestComponent', () => {
  let component: MyformtestComponent;
  let fixture: ComponentFixture<MyformtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyformtestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyformtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
