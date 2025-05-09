import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstudentComponent } from './edit-estudent.component';

describe('EditEstudentComponent', () => {
  let component: EditEstudentComponent;
  let fixture: ComponentFixture<EditEstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEstudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
