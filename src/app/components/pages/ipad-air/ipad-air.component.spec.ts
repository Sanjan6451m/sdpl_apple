import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadAirComponent } from './ipad-air.component';

describe('IpadAirComponent', () => {
  let component: IpadAirComponent;
  let fixture: ComponentFixture<IpadAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpadAirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpadAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
