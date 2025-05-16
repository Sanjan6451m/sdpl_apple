import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBP1416inComponent } from './mbp1416in.component';

describe('MBP1416inComponent', () => {
  let component: MBP1416inComponent;
  let fixture: ComponentFixture<MBP1416inComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MBP1416inComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MBP1416inComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
