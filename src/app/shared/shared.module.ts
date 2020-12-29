import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from '../stats/stats.component';
import { TextComponent } from '../text/text.component';
import { PicturesComponent } from '../pictures/pictures.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [    
    PicturesComponent,
    StatsComponent,
    TextComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PicturesComponent,
    StatsComponent,
    TextComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
