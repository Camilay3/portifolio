import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDesktopComponent } from './navbar-desktop.component';

describe('NavbarDesktopComponent', () => {
  let component: NavbarDesktopComponent;
  let fixture: ComponentFixture<NavbarDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
