import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailMartComponent } from './retail-mart.component';

describe('RetailMartComponent', () => {
  let component: RetailMartComponent;
  let fixture: ComponentFixture<RetailMartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailMartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailMartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
