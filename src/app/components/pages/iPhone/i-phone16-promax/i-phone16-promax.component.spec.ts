import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPhone16PromaxComponent } from './i-phone16-promax.component';

describe('IPhone16PromaxComponent', () => {
  let component: IPhone16PromaxComponent;
  let fixture: ComponentFixture<IPhone16PromaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPhone16PromaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPhone16PromaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
