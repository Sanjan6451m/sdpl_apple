import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPhoneAirComponent } from './i-phone-air.component';

describe('IPhoneAirComponent', () => {
  let component: IPhoneAirComponent;
  let fixture: ComponentFixture<IPhoneAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPhoneAirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPhoneAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
