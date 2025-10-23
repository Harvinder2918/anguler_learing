import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningmainComponent } from './learningmain.component';

describe('LearningmainComponent', () => {
  let component: LearningmainComponent;
  let fixture: ComponentFixture<LearningmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
