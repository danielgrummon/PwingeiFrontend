import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MinimalistComponent } from './minimalist/minimalist.component';
import { HybridsComponent } from './hybrids/hybrids.component';
import { ListModule } from './list/list.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MinimalistComponent,
    HybridsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
