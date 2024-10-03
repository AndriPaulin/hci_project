import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskInputFieldComponent } from './new-task-input-field.component';

describe('NewTaskInputFieldComponent', () => {
  let component: NewTaskInputFieldComponent;
  let fixture: ComponentFixture<NewTaskInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTaskInputFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTaskInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
