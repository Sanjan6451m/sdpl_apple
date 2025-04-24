import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleUpgradeComponent } from './apple-upgrade.component';

describe('AppleUpgradeComponent', () => {
  let component: AppleUpgradeComponent;
  let fixture: ComponentFixture<AppleUpgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleUpgradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
