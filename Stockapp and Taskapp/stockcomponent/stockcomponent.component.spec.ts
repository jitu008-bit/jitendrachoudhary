import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockcomponentComponent } from './stockcomponent.component';

describe('StockcomponentComponent', () => {
  let component: StockcomponentComponent;
  let fixture: ComponentFixture<StockcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
