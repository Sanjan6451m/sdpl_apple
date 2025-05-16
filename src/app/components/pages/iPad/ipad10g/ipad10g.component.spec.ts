import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ipad10gComponent } from './ipad10g.component';

describe('Ipad10gComponent', () => {
  let component: Ipad10gComponent;
  let fixture: ComponentFixture<Ipad10gComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ipad10gComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ipad10gComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
