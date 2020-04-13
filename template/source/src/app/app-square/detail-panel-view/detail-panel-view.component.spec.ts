import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPanelViewComponent } from './detail-panel-view.component';

describe('DetailPanelViewComponent', () => {
  let component: DetailPanelViewComponent;
  let fixture: ComponentFixture<DetailPanelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPanelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPanelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
