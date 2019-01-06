import { NgModule } from '@angular/core';

import { ReactiveFormComponent } from './reactive-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';

@NgModule({
  declarations: [
    ReactiveFormComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormRoutingModule
  ]
})
export class ReactiveFormModule { }
