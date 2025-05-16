import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPadProNewComponent } from './i-pad-pro-new.component';

describe('IPadProNewComponent', () => {
  let component: IPadProNewComponent;
  let fixture: ComponentFixture<IPadProNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPadProNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPadProNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
