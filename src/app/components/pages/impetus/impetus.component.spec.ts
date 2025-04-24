import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpetusComponent } from './impetus.component';

describe('ImpetusComponent', () => {
  let component: ImpetusComponent;
  let fixture: ComponentFixture<ImpetusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpetusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImpetusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
