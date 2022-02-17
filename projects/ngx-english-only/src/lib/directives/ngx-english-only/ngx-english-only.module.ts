import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEnglishOnlyDirective } from './ngx-english-only.directive';



@NgModule({
  declarations: [
    NgxEnglishOnlyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxEnglishOnlyDirective
  ]
})
export class NgxEnglishOnlyModule { }
