import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MinimalistComponent } from './minimalist/minimalist.component';
import { HybridsComponent } from './hybrids/hybrids.component';
import { ListModule } from './list/list.module';
import { RouterModule } from '@angular/router';
//import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MinimalistComponent,
    HybridsComponent
  ],
  imports: [
   // SharedModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'welcome' },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'minimalist', component: MinimalistComponent },
      { path: 'hybrids', component: HybridsComponent },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
