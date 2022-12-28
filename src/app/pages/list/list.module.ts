import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { UncompletedComponent } from '../../components/uncompleted/uncompleted.component';
import { CompletedComponent } from '../../components/completed/completed.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule
  ],
  declarations: [
    ListPage,
    UncompletedComponent,
    CompletedComponent,
  ]
})
export class ListPageModule {}
