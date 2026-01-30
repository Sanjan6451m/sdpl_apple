import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbpM5Component } from './mbp-m5.component';

describe('MbpM5Component', () => {
  let component: MbpM5Component;
  let fixture: ComponentFixture<MbpM5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MbpM5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MbpM5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
