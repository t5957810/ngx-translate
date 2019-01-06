import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language$ = new ReplaySubject<LangChangeEvent>(1);
  translate = this.translateService;
  // 國旗對照
  countryMap = new Map().set('en', 'flag-us').set('zh-tw', 'flag-tw');

  constructor(private translateService: TranslateService) {}

  setInitState() {
    this.translateService.addLangs(['en', 'zh-tw']);
    // 根據使用者的瀏覽器語言設定，如果是中文就顯示中文，否則都顯示英文
    // 繁體/簡體中文代碼都是zh
    const browserLang = (this.translate.getBrowserLang().includes('zh')) ? 'zh-tw' : 'en'  ;
    this.setLang(browserLang);
  }

  setLang(lang: string) {
    this.translateService.onLangChange.pipe(take(1)).subscribe(result => {
      this.language$.next(result);
    });
    this.translateService.use(lang);
  }
}
