import {
  Component,
  OnInit,
  ViewChild,
  NgZone,
  OnDestroy,
} from '@angular/core';
import {
  MediaMatcher,
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';
import { LayoutService } from '../../services/layout.service';
import { MatSidenav } from '@angular/material';
import { Menu } from '../../model/interface/menu.interface';
import { map, tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  menuData$: Observable<Menu[]>;
  isMobile$: Observable<boolean>;
  @ViewChild('snav') snav: MatSidenav;
  destory = new Subject();

  constructor(
    breakpointObserver: BreakpointObserver,
    public layoutService: LayoutService
  ) {
    this.isMobile$ = breakpointObserver.observe('(max-width: 1023px)').pipe(
      map(match => match.matches),
      tap(isMobile => {
        if (!isMobile) {
          this.snav.close();
        }
      }),
      takeUntil(this.destory)
    );
  }

  ngOnInit() {
    this.menuData$ = this.layoutService.queryMenu();
  }

  ngOnDestroy(): void {
    this.destory.next();
    this.destory.complete();
  }
}
