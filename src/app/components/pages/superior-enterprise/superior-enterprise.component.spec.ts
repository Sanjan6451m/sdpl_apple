import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperiorEnterpriseComponent } from './superior-enterprise.component';

describe('SuperiorEnterpriseComponent', () => {
  let component: SuperiorEnterpriseComponent;
  let fixture: ComponentFixture<SuperiorEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperiorEnterpriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperiorEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
