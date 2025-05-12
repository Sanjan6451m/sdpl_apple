import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoPageComponent } from './tco-page.component';

describe('TcoPageComponent', () => {
  let component: TcoPageComponent;
  let fixture: ComponentFixture<TcoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TcoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TcoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
