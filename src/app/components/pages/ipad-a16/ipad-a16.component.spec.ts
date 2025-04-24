import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadA16Component } from './ipad-a16.component';

describe('IpadA16Component', () => {
  let component: IpadA16Component;
  let fixture: ComponentFixture<IpadA16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpadA16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpadA16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
