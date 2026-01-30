import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone17Component } from './iphone17.component';

describe('Iphone17Component', () => {
  let component: Iphone17Component;
  let fixture: ComponentFixture<Iphone17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iphone17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Iphone17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
