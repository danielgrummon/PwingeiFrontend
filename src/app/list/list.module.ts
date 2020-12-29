import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { DetailComponent } from '../detail/detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'list', component: ListComponent },
      { path: 'detail/:id', component: DetailComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ListComponent,
    DetailComponent
  ]
})

export class ListModule { }
