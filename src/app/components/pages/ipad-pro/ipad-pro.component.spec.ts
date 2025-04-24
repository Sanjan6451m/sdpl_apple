import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadProComponent } from './ipad-pro.component';

describe('IpadProComponent', () => {
  let component: IpadProComponent;
  let fixture: ComponentFixture<IpadProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpadProComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpadProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
