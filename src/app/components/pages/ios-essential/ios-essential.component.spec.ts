import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IosEssentialComponent } from './ios-essential.component';

describe('IosEssentialComponent', () => {
  let component: IosEssentialComponent;
  let fixture: ComponentFixture<IosEssentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IosEssentialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IosEssentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
