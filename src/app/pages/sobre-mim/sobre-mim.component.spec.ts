import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMimComponent } from './sobre-mim.component';

describe('SobreMimComponent', () => {
  let component: SobreMimComponent;
  let fixture: ComponentFixture<SobreMimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreMimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
