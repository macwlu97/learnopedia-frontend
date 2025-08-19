import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    
  ],
  // exports: [
  //   BlockTableComponent
  // ]
})
export class PagesModule { }
