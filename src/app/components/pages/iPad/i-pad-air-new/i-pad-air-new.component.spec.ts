import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPadAirNewComponent } from './i-pad-air-new.component';

describe('IPadAirNewComponent', () => {
  let component: IPadAirNewComponent;
  let fixture: ComponentFixture<IPadAirNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPadAirNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPadAirNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
