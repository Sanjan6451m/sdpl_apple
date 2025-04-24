import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleProgramscreenComponent } from './apple-programscreen.component';

describe('AppleProgramscreenComponent', () => {
  let component: AppleProgramscreenComponent;
  let fixture: ComponentFixture<AppleProgramscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleProgramscreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleProgramscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
