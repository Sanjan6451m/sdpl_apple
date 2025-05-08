import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPadProComponent } from './i-pad-pro.component';

describe('IPadProComponent', () => {
  let component: IPadProComponent;
  let fixture: ComponentFixture<IPadProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPadProComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPadProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
