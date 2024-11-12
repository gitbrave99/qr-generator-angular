import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCardComponentComponent } from './qr-card-component.component';

describe('QrCardComponentComponent', () => {
  let component: QrCardComponentComponent;
  let fixture: ComponentFixture<QrCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QrCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
