import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCardContainerComponent } from './vehicle-card-container.component';

describe('VehicleCardContainerComponent', () => {
  let component: VehicleCardContainerComponent;
  let fixture: ComponentFixture<VehicleCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleCardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
