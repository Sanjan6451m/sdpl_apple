import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveInnovationComponent } from './drive-innovation.component';

describe('DriveInnovationComponent', () => {
  let component: DriveInnovationComponent;
  let fixture: ComponentFixture<DriveInnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriveInnovationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriveInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
