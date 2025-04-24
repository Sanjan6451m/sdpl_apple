import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone16eComponent } from './iphone16e.component';

describe('Iphone16eComponent', () => {
  let component: Iphone16eComponent;
  let fixture: ComponentFixture<Iphone16eComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iphone16eComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Iphone16eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
