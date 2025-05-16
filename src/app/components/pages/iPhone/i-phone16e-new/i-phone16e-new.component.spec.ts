import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPhone16eNewComponent } from './i-phone16e-new.component';

describe('IPhone16eNewComponent', () => {
  let component: IPhone16eNewComponent;
  let fixture: ComponentFixture<IPhone16eNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPhone16eNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPhone16eNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
