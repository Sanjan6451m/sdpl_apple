import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleProgramComponent } from './apple-program.component';

describe('AppleProgramComponent', () => {
  let component: AppleProgramComponent;
  let fixture: ComponentFixture<AppleProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
