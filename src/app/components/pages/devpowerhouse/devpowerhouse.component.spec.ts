import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevpowerhouseComponent } from './devpowerhouse.component';

describe('DevpowerhouseComponent', () => {
  let component: DevpowerhouseComponent;
  let fixture: ComponentFixture<DevpowerhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevpowerhouseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevpowerhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
