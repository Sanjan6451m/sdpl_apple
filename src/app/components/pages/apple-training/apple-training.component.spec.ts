import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleTrainingComponent } from './apple-training.component';

describe('AppleTrainingComponent', () => {
  let component: AppleTrainingComponent;
  let fixture: ComponentFixture<AppleTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
