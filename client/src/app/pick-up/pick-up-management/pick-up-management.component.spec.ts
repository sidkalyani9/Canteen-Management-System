import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpManagementComponent } from './pick-up-management.component';

describe('PickUpManagementComponent', () => {
  let component: PickUpManagementComponent;
  let fixture: ComponentFixture<PickUpManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickUpManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickUpManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
