import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSupplierRequestComponent } from './new-supplier-request.component';

describe('NewSupplierRequestComponent', () => {
  let component: NewSupplierRequestComponent;
  let fixture: ComponentFixture<NewSupplierRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSupplierRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSupplierRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
