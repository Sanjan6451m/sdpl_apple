import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirpodsMaxComponent } from './airpods-max.component';

describe('AirpodsMaxComponent', () => {
  let component: AirpodsMaxComponent;
  let fixture: ComponentFixture<AirpodsMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirpodsMaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirpodsMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
