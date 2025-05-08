import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPadAirComponent } from './i-pad-air.component';

describe('IPadAirComponent', () => {
  let component: IPadAirComponent;
  let fixture: ComponentFixture<IPadAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPadAirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPadAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
