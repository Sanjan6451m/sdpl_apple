import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone16Component } from './iphone16.component';

describe('Iphone16Component', () => {
  let component: Iphone16Component;
  let fixture: ComponentFixture<Iphone16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iphone16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Iphone16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
