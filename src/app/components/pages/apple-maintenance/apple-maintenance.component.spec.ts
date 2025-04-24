import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleMaintenanceComponent } from './apple-maintenance.component';

describe('AppleMaintenanceComponent', () => {
  let component: AppleMaintenanceComponent;
  let fixture: ComponentFixture<AppleMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
