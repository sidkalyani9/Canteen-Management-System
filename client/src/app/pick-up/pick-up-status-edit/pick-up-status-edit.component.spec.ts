import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpStatusEditComponent } from './pick-up-status-edit.component';

describe('PickUpStatusEditComponent', () => {
  let component: PickUpStatusEditComponent;
  let fixture: ComponentFixture<PickUpStatusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickUpStatusEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickUpStatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
