import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPhone16proComponent } from './i-phone16pro.component';

describe('IPhone16proComponent', () => {
  let component: IPhone16proComponent;
  let fixture: ComponentFixture<IPhone16proComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPhone16proComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPhone16proComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
