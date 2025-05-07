import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPhone16newComponent } from './i-phone16new.component';

describe('IPhone16newComponent', () => {
  let component: IPhone16newComponent;
  let fixture: ComponentFixture<IPhone16newComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPhone16newComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPhone16newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
