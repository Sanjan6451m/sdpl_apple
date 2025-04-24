import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleDeploymentComponent } from './apple-deployment.component';

describe('AppleDeploymentComponent', () => {
  let component: AppleDeploymentComponent;
  let fixture: ComponentFixture<AppleDeploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleDeploymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
