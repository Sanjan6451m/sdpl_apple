import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplecareComponent } from './applecare.component';

describe('ApplecareComponent', () => {
  let component: ApplecareComponent;
  let fixture: ComponentFixture<ApplecareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplecareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplecareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
