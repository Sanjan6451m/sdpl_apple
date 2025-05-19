import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacstudioComponent } from './macstudio.component';

describe('MacstudioComponent', () => {
  let component: MacstudioComponent;
  let fixture: ComponentFixture<MacstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacstudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
