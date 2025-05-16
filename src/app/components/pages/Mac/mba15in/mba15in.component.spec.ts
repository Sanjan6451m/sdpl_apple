import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBA15inComponent } from './mba15in.component';

describe('MBA15inComponent', () => {
  let component: MBA15inComponent;
  let fixture: ComponentFixture<MBA15inComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MBA15inComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MBA15inComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
