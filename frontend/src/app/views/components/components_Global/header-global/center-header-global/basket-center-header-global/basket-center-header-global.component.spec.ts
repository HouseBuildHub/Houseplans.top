import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketCenterHeaderGlobalComponent } from './basket-center-header-global.component';

describe('BasketCenterHeaderGlobalComponent', () => {
  let component: BasketCenterHeaderGlobalComponent;
  let fixture: ComponentFixture<BasketCenterHeaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasketCenterHeaderGlobalComponent]
    });
    fixture = TestBed.createComponent(BasketCenterHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
