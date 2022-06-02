import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-panel-view',
  templateUrl: './detail-panel-view.component.html',
  styleUrls: ['./detail-panel-view.component.css']
})
export class DetailPanelViewComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  objectId: string;
  viewId: string;
  recordId: string;
  selectedRecord: { record_locator: string } = {
    record_locator: ""
  };
  selectedView: { name: string } = {
    name:''
  };

  layoutCols = {
    col1: 20,
    col2: 80,
    col3: 0
  }

  @ViewChild('objectViewsElem', { static: true, read: ElementRef }) objectViewsElem: ElementRef;
  @ViewChild('recordTableViewElem', { static: true, read: ElementRef }) recordTableViewElem: ElementRef;
  @ViewChild('recordFormElem', { static: true, read: ElementRef }) recordFormElem: ElementRef;
  @ViewChild('recordActionsElem', { static: true, read: ElementRef }) recordActionsElem: ElementRef;

  constructor(private route: ActivatedRoute, private router: Router, private toastr: ToastrService, ) { }

  ngOnInit() {
    this.subscription.add(
      this.route.params.subscribe((param) => {
        if (param['objectId']) {
          this.objectId = param['objectId'];
          this.updateObjectViewsList(this.objectId);
        }
      })
    );
    this.subscription.add(
      this.route.queryParams.subscribe((qParam) => {
        if (qParam['vid']) {
          this.viewId = qParam['vid'];
          this.updateTableView(this.viewId);
          this.layoutCols = {
            col1: 20,
            col2: 80,
            col3: 0
          }
        }
        if (qParam['rid']) {
          this.recordId = qParam['rid'];
          this.updateActiveRecordComponents(this.recordId);
          this.layoutCols = {
            col1: 20,
            col2: 0,
            col3: 80
          }
        }
      })
    )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateObjectViewsList(objectId: string) {
    this.objectViewsElem.nativeElement.setAttribute('object-id', objectId);
  }

  viewSelectionChange(event) {
    const selectedView = event['detail'];
    this.selectedView = selectedView;
    this.router.navigate(['./'], {
      relativeTo: this.route, queryParams: {
        vid: selectedView['id']
      }
    });
    this.layoutCols = {
      col1: 20,
      col2: 80,
      col3: 0
    }

  }
  updateTableView(viewId) {
    this.recordTableViewElem.nativeElement.setAttribute('view-id', viewId);
    this.recordTableViewElem.nativeElement.setAttribute('object-id', this.objectId);
    if (this.selectedView['SortBy']) {
      this.recordTableViewElem.nativeElement.setAttribute('sort-by', this.selectedView['SortBy']);
    }
    if (this.selectedView['SortOrder']) {
      this.recordTableViewElem.nativeElement.setAttribute('sort-order', this.selectedView['SortOrder']);
    }
  }
  recordTableSelectionChange(event) {
    const selectedRecord = event['detail'];
    this.router.navigate(['./'], {
      relativeTo: this.route, queryParams: {
        rid: selectedRecord['recordId'],
        vid: this.selectedView['id']
      }
    }).then(() => {
      this.layoutCols = {
        col1: 20,
        col2: 20,
        col3: 60
      }
    });
    this.selectedRecord = selectedRecord['row'];
  }
  updateActiveRecordComponents(recordId) {
    this.recordFormElem.nativeElement.setAttribute('object-id', this.objectId);
    this.recordFormElem.nativeElement.setAttribute('record-id', recordId);

    this.recordActionsElem.nativeElement.setAttribute('object-id', this.objectId);
    this.recordActionsElem.nativeElement.setAttribute('record-id', recordId);

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
      this.toastr.success(this.selectedRecord['record_locator'], 'Save successful', {
        timeOut: 3000
      });
    } else {
      this.toastr.error(this.selectedRecord['record_locator'], 'Save Failed', {
        timeOut: 3000
      });
    }
  }
  createNewRecord():void{
    this.router.navigate(['./'], {
      relativeTo: this.route, queryParams: {
        rid: -1,
        vid: this.selectedView['id']
      }
    }).then(() => {
      this.layoutCols = {
        col1: 0,
        col2: 0,
        col3: 100
      }
    });
  }
  viewListloadHandler(eventData):void{
    console.log(eventData,'@@@@@@@@@')
  }
}
