import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacDeveloperComponent } from './mac-developer.component';

describe('MacDeveloperComponent', () => {
  let component: MacDeveloperComponent;
  let fixture: ComponentFixture<MacDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacDeveloperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
