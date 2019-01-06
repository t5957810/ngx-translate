import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    SharedModule,
    TranslateModule,
    RouterModule, // 為了使用routerLink
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent
  ],
  entryComponents: [
  ],
})
export class LayoutModule { }
