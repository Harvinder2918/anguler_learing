import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulerFormsComponent } from './anguler-forms.component';

describe('AngulerFormsComponent', () => {
  let component: AngulerFormsComponent;
  let fixture: ComponentFixture<AngulerFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngulerFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngulerFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
