import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleDataService } from '../../services/article.service';
import { Article } from '../../models/article.model';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
})
export class ArticleComponent {
  article: Article | null = null;
  loading = false;
  error = '';

  constructor(private articleService: ArticleDataService) {}

  importArticle(title: string) {
    if (!title) return;
    this.loading = true;
    this.articleService.importFromWikipedia(title).subscribe({
      next: data => { this.article = data; this.loading = false; },
      error: () => { this.error = 'Failed to import'; this.loading = false; }
    });
  }

  fetchArticle(id: string) {
    if (!id) return;
    this.loading = true;
    this.articleService.getArticle(id).subscribe({
      next: data => { this.article = data; this.loading = false; },
      error: () => { this.error = 'Not found'; this.loading = false; }
    });
  }
}
