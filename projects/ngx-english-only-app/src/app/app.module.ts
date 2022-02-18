import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEnglishOnlyModule } from 'projects/ngx-english-only/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInputComponent } from './my-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEnglishOnlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
