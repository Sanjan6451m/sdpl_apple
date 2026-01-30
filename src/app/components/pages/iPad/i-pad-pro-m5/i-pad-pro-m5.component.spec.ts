import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPadProM5Component } from './i-pad-pro-m5.component';

describe('IPadProM5Component', () => {
  let component: IPadProM5Component;
  let fixture: ComponentFixture<IPadProM5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPadProM5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPadProM5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
