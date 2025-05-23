import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone15proComponent } from './iphone15pro.component';

describe('Iphone15proComponent', () => {
  let component: Iphone15proComponent;
  let fixture: ComponentFixture<Iphone15proComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iphone15proComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Iphone15proComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
