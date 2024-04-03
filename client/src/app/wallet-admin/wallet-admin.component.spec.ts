import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAdminComponent } from './wallet-admin.component';

describe('WalletAdminComponent', () => {
  let component: WalletAdminComponent;
  let fixture: ComponentFixture<WalletAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WalletAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalletAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
