import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Menu } from '../model/interface/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  constructor(public http: HttpClient) {
    this.queryMenu();
  }
  queryMenu(): Observable<Menu[]> {
    return of([
      {
        menuId: 1,
        parentMenuId: 1,
        actionUrl: '/home',
        menuName: '',
        menuNameC: '',
        display: 'menu.home',
        dispSeq: 1,
        isLeaf: 'Y',
        level: 0,
        subMenus: []
      },
      {
        menuId: 2,
        parentMenuId: 2,
        actionUrl: '/feature',
        menuName: 'feature',
        menuNameC: '',
        display: 'menu.feature.name',
        dispSeq: 1,
        isLeaf: 'Y',
        level: 0,
        subMenus: [
          {
            menuId: 3,
            parentMenuId: 2,
            actionUrl: '/feature/form',
            menuName: '',
            menuNameC: '',
            display: 'menu.feature.form',
            dispSeq: 1,
            isLeaf: 'Y',
            level: 0,
            subMenus: []
          }
        ]
      }
    ]);
  }
}
