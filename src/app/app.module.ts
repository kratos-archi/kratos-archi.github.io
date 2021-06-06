import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxUsefulSwiperModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
