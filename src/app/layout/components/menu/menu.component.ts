import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../../model/interface/menu.interface';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() value: Observable<Menu[]>;
  @Input() menu;

  get currentLanguage() {
    return this.languageService.translate.currentLang;
  }
  constructor(
    private languageService: LanguageService
  ) {}
  getCountryMap(currentLanguage: string) {
    return this.languageService.countryMap.get(currentLanguage);
  }
  useLanguage(language: string) {
    this.languageService.setLang(language);
  }

  ngOnInit() {}
}
