import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVSolutionsComponent } from './avsolutions.component';

describe('AVSolutionsComponent', () => {
  let component: AVSolutionsComponent;
  let fixture: ComponentFixture<AVSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AVSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AVSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
