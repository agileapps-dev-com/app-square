import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css']
})
export class MastheadComponent implements OnInit {
  themesList = [
    {
      id: "purple",
      name: "purple Theme",
      path: "assets/themes/purple/css/ace-theme.css"
    },
    {
      id: "blueGray",
      name: "Blue Green",
      path: "assets/themes/blue-gray/css/ace-theme.css"
    }
    ,
    {
      id: "pink",
      name: "pink",
      path: "assets/themes/pink/css/ace-theme.css"
    }
    ,
    {
      id: "yy",
      name: "cyan",
      path: "assets/themes/cyan/css/ace-theme.css"
    }
  ]
  constructor(@Inject(DOCUMENT) private document) { }

  ngOnInit() {
  }

  swtichThemeOptions(option) {
    this.document.getElementById('theme-ref-id').setAttribute('href', option['path']);
  }

}
