import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleWatchComponent } from './apple-watch.component';

describe('AppleWatchComponent', () => {
  let component: AppleWatchComponent;
  let fixture: ComponentFixture<AppleWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleWatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
