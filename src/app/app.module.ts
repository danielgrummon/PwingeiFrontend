import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListComponent } from './list/list.component';
import { PicturesComponent } from './pictures/pictures.component';
import { TextComponent } from './text/text.component';
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import { StatsComponent } from './stats/stats.component';
import { MinimalistComponent } from './minimalist/minimalist.component';
import { HybridsComponent } from './hybrids/hybrids.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListComponent,
    PicturesComponent,
    TextComponent,
    DetailComponent,
    StatsComponent,
    MinimalistComponent,
    HybridsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
