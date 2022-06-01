import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-supplier-request',
  templateUrl: './new-supplier-request.component.html',
  styleUrls: ['./new-supplier-request.component.css']
})
export class NewSupplierRequestComponent implements OnInit {
  @ViewChild('recordFormElem', { static: true, read: ElementRef }) recordFormElem: ElementRef;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }
  recordFormSaveHandler(eventData): void {
    console.log(eventData, 'savedddddd.........')
  }

  resetRecordForm() {
    this.recordFormElem.nativeElement.resetRecord();
  }
  saveRecordForm() {
    this.recordFormElem.nativeElement.saveRecord();
    // this.toastr.success(this.selectedRecord['record_locator'], 'Save successful', {
    //   timeOut: 3000
    // });
  }

}
