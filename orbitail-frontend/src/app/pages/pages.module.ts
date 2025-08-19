import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BlockTableComponent } from './block-table/block-table.component';

@NgModule({
  // declarations: [BlockTableComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    
  ],
  // exports: [
  //   BlockTableComponent
  // ]
})
export class PagesModule { }
