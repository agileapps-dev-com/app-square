import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSpacePageComponent } from './app-space-page.component';

describe('AppSpacePageComponent', () => {
  let component: AppSpacePageComponent;
  let fixture: ComponentFixture<AppSpacePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSpacePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSpacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
