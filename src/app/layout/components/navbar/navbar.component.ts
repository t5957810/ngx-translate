import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';
import { Observable } from 'rxjs';
import { Menu } from '../../model/interface/menu.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() value: Observable<Menu[]>;
  @Input() menu;
  @Input() isMobile;
  get currentLanguage() {
    return this.languageService.translate.currentLang;
  }

  constructor( private languageService: LanguageService ) {
  }

  getCountryMap(currentLanguage: string) {
    return this.languageService.countryMap.get(currentLanguage);
  }
  useLanguage(language: string) {
    this.languageService.setLang(language);
  }

  ngOnInit() {

  }

}
