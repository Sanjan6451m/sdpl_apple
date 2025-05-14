import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacdoesComponent } from './macdoes.component';

describe('MacdoesComponent', () => {
  let component: MacdoesComponent;
  let fixture: ComponentFixture<MacdoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacdoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacdoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
