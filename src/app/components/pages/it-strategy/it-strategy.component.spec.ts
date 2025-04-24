import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITStrategyComponent } from './it-strategy.component';

describe('ITStrategyComponent', () => {
  let component: ITStrategyComponent;
  let fixture: ComponentFixture<ITStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ITStrategyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ITStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
