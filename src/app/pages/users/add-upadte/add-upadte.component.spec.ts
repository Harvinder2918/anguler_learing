import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpadteComponent } from './add-upadte.component';

describe('AddUpadteComponent', () => {
  let component: AddUpadteComponent;
  let fixture: ComponentFixture<AddUpadteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpadteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpadteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
