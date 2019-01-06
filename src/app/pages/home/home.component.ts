import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  isMobile$: Observable<boolean>;
  destory = new Subject();

  constructor(
    breakpointObserver: BreakpointObserver,
  ) {
    this.isMobile$ = breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .pipe(
        map( (match) => match.matches),
        takeUntil(this.destory)
      );
   }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destory.next();
    this.destory.complete();
  }

}
