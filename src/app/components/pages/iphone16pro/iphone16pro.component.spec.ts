import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone16proComponent } from './iphone16pro.component';

describe('Iphone16proComponent', () => {
  let component: Iphone16proComponent;
  let fixture: ComponentFixture<Iphone16proComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iphone16proComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Iphone16proComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
