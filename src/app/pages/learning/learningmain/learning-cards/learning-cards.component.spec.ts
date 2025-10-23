import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardsComponent } from './learning-cards.component';

describe('LearningCardsComponent', () => {
  let component: LearningCardsComponent;
  let fixture: ComponentFixture<LearningCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
