import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  tabSelectionChange(event) {
    const eventData = event['detail'];
    const objectId = eventData['id'] || null;
    if (eventData['type'] === 'object') {
      this.router.navigate(['./../details/', objectId], { relativeTo: this.route })
    }
  }

}
