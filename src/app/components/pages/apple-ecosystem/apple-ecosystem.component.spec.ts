import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleEcosystemComponent } from './apple-ecosystem.component';

describe('AppleEcosystemComponent', () => {
  let component: AppleEcosystemComponent;
  let fixture: ComponentFixture<AppleEcosystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleEcosystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleEcosystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
