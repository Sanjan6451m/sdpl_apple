import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPurcProgComponent } from './emp-purc-prog.component';

describe('EmpPurcProgComponent', () => {
  let component: EmpPurcProgComponent;
  let fixture: ComponentFixture<EmpPurcProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpPurcProgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpPurcProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
