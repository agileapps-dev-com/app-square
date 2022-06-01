import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppSquare';
  isMastHeadShown:boolean = true;
  constructor(public router: Router, public route: ActivatedRoute) {
    this.initFn();
  }
  initFn() {
    // this.router.events.filter(e => e instanceof NavigationEnd)
    //   .forEach(e => {
    //     this.title = route.root.firstChild.snapshot.data['PageName'];
    //   });
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
            map(() => this.route),
            map((route) => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            mergeMap((route) => route.data))
        .subscribe((routeData) => {


          //is masthead to be hidden ?
console.log(routeData['isMastHeadShown'],'....')
          this.isMastHeadShown = routeData['isMastHeadShown'] ? routeData['isMastHeadShown'] : true;
        });
      
      

  }
}
