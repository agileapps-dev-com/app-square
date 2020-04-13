import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SplitComponent, SplitAreaDirective } from 'angular-split';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-space-page',
  templateUrl: './app-space-page.component.html',
  styleUrls: ['./app-space-page.component.css']
})
export class AppSpacePageComponent implements OnInit {
  activeTab: {
    title?: string
  } = {};
  activeView: {
    name?: string
  } = {};
  activeRecord = {
    row: {
      record_locator: ""
    }
  };

  @ViewChild('objectViewsElem', { static: true, read: ElementRef }) objectViewsElem: ElementRef;
  @ViewChild('recordTableViewElem', { static: true, read: ElementRef }) recordTableViewElem: ElementRef;
  @ViewChild('recordFormElem', { static: true, read: ElementRef }) recordFormElem: ElementRef;
  @ViewChild('recordActionsElem', { static: true, read: ElementRef }) recordActionsElem: ElementRef;

  layoutCols = {
    col1: 20,
    col2: 60,
    col3: 20
  }
  layoutCol1Rows = {
    row1: 70,
    row2: 30
  }

  constructor(private cdr: ChangeDetectorRef, private toastr: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(this.handleQueryParams.bind(this));
  }


  tabSelectionChange(eventData) {
    const selectedTab = eventData['detail'];
    if (selectedTab['type'] === 'object') {
      this.activeTab = selectedTab;
      this.router.navigate(['/AppSpace/details'], { queryParams: { oid: selectedTab.id } })
      //this.objectViewsElem.nativeElement.setAttribute('object-id', selectedTab.id);
      this.layoutCol1Rows = {
        row1: 20,
        row2: 80
      }
    }
  }
  viewSelectionChange(eventData) {

    // const routeParamsObj = this.activatedRoute.queryParams || {};
    const oIdParamValue = this.activeTab['id'];
    const selectedView = eventData['detail'];
    if (selectedView['id']) {
      this.activeView = selectedView;
      this.router.navigate(['/AppSpace/details'], { queryParams: { oid: oIdParamValue, vid: this.activeView['id'] } })

      // this.recordTableViewElem.nativeElement.setAttribute('object-id', this.activeTab['id']);
      // this.recordTableViewElem.nativeElement.setAttribute('view-id', this.activeView['id']);
      // this.recordTableViewElem.nativeElement.setAttribute('sort-by', tis.activeView['SortBy']);
      // this.recordTableViewElem.nativeElement.setAttribute('sort-order', this.activeView['SortOrder']);
    }
    this.layoutCols = {
      col1: 20,
      col2: 60,
      col3: 20
    }
  }
  recordTableSelectionChange(eventData) {
    // const routeParamsObj = this.activatedRoute.queryParams.getValue() || {};
    const oIdParamValue = this.activeTab['id'];
    const viewIdParamValue = this.activeView['id'];

    const recordMeta = eventData['detail'];
    this.activeRecord = recordMeta;
    this.router.navigate(['/AppSpace/details'], { queryParams: { oid: oIdParamValue, vid: viewIdParamValue, rid: this.activeRecord['recordId'] } })
    // this.recordFormElem.nativeElement.setAttribute('object-id', this.activeRecord['objectId']);
    // this.recordFormElem.nativeElement.setAttribute('record-id', this.activeRecord['recordId']);
    this.layoutCols = {
      col1: 20,
      col2: 20,
      col3: 60
    }
  }

  resetRecordForm() {
    this.recordFormElem.nativeElement.resetRecord();
  }
  saveRecordForm() {
    this.recordFormElem.nativeElement.saveRecord();

  }

  recordFormSaveHandler(eventData) {
    const resposneData = eventData['detail'];
    if (resposneData['status'] === 'success') {
      this.toastr.success(this.activeRecord.row.record_locator, 'Save successful', {
        timeOut: 3000
      });
    } else {
      this.toastr.error(this.activeRecord.row.record_locator, 'Save Failed', {
        timeOut: 3000
      });
    }
  }

  recodrFormOnLoadHandler(eventData) {
    const onLoadData = eventData['detail'];
    if (this.activeRecord['recordId'] && this.activeRecord['recordId'] != '-1') {
      this.loadRecordActionsElement();
    }
  }
  onAppTabsListLoadHandler(eventData) {
    const onLoadData = eventData['detail'];
    if (onLoadData && onLoadData[0] && onLoadData[0]['id'] && !this.activeTab['id']) {
      this.loadObjectViewElement();
    }
  }
  onObjectViewsListLoadHandler(eventData) {
    const onLoadData = eventData['detail'];
    console.log(onLoadData, '$$$$$$$$$$$$$$$')
    if (onLoadData && onLoadData[0] && onLoadData[0]['id'] && !this.activeView['id']) {
      this.loadRecordTableViewElement();
    }
  }

  onRecordTableViewLoadHandler(eventData) {
    const onLoadData = eventData['detail'];
    console.log(onLoadData, '*************');
  
    if (onLoadData && onLoadData[0] && onLoadData[0]['id'] && onLoadData[0]['object_id'] && !this.activeRecord['row']['recordId']) {
      this.activeRecord['recordId'] =  onLoadData[0]['id'];
      this.activeRecord['objectId'] =  onLoadData[0]['object_id'];

      this.loadRecordFormElement();
    }
  }

  private handleQueryParams(params) {
    console.log(params, '############');
    if (params['oid']) {
      this.activeTab['id'] = params['oid'];
      this.loadObjectViewElement()
      // this.objectViewsElem.nativeElement.setAttribute('object-id', this.activeTab['id']);
    }
    if (params['oid'] && params['vid']) {
      this.activeTab['id'] = params['oid'];
      this.activeView['id'] = params['vid'];
      this.loadRecordTableViewElement();
      // this.recordTableViewElem.nativeElement.setAttribute('object-id', this.activeTab['id']);
      // this.recordTableViewElem.nativeElement.setAttribute('view-id', this.activeView['id']);
    }
    if (params['oid'] && params['vid'] && params['rid']) {
      this.activeTab['id'] = params['oid'];
      this.activeView['id'] = params['vid'];
      this.activeRecord['recordId'] = params['rid'];
      this.activeRecord['objectId'] = params['oid'];

      this.loadRecordFormElement();


    }
  }
  private loadObjectViewElement() {
    this.objectViewsElem.nativeElement.setAttribute('object-id', this.activeTab['id']);
  }
  private loadRecordTableViewElement() {
    this.recordTableViewElem.nativeElement.setAttribute('object-id', this.activeTab['id']);
    this.recordTableViewElem.nativeElement.setAttribute('view-id', this.activeView['id']);

    if (this.activeView['SortBy']) {
      this.recordTableViewElem.nativeElement.setAttribute('sort-by', this.activeView['SortBy']);
    }
    if (this.activeView['SortOrder']) {
      this.recordTableViewElem.nativeElement.setAttribute('sort-order', this.activeView['SortOrder']);
    }

  }
  private loadRecordFormElement() {
    this.recordFormElem.nativeElement.setAttribute('object-id', this.activeRecord['objectId']);
    this.recordFormElem.nativeElement.setAttribute('record-id', this.activeRecord['recordId']);

  }
  private loadRecordActionsElement() {
    this.recordActionsElem.nativeElement.setAttribute('object-id', this.activeRecord['objectId']);
    this.recordActionsElem.nativeElement.setAttribute('record-id', this.activeRecord['recordId']);
  }


}
