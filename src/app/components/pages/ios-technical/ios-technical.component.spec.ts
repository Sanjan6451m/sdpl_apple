import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IosTechnicalComponent } from './ios-technical.component';

describe('IosTechnicalComponent', () => {
  let component: IosTechnicalComponent;
  let fixture: ComponentFixture<IosTechnicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IosTechnicalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IosTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
