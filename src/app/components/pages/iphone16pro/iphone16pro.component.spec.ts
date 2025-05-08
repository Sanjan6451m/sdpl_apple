import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone16pro1Component } from './iphone16pro.component';

describe('Iphone16proComponent', () => {
  let component: Iphone16pro1Component;
  let fixture: ComponentFixture<Iphone16pro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iphone16pro1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Iphone16pro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
