import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleEnterpriseComponent } from './apple-enterprise.component';

describe('AppleEnterpriseComponent', () => {
  let component: AppleEnterpriseComponent;
  let fixture: ComponentFixture<AppleEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleEnterpriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
