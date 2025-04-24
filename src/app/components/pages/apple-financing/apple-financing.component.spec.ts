import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleFinancingComponent } from './apple-financing.component';

describe('AppleFinancingComponent', () => {
  let component: AppleFinancingComponent;
  let fixture: ComponentFixture<AppleFinancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleFinancingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
