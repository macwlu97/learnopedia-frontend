import { Component } from '@angular/core';
import { ArticleDataService } from '../../services/article.service';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  standalone: true,       
  imports: [CommonModule, FormsModule],
})
export class ArticleComponent {
  article: Article | null = null;
  loading = false;
  error = '';

  constructor(private articleService: ArticleDataService) {}

  importArticle(title: string): void {
    if (!title) {
      this.error = 'Please provide an article title';
      return;
    }

    this.loading = true;
    this.error = '';
    this.articleService.importFromWikipedia(title).subscribe({
      next: (data) => {
        this.article = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to import article';
        this.loading = false;
      }
    });
  }

  fetchArticle(id: string): void {
    if (!id) {
      this.error = 'Please provide an article ID';
      return;
    }

    this.loading = true;
    this.error = '';
    this.articleService.getArticle(id).subscribe({
      next: (data) => {
        this.article = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Article not found';
        this.loading = false;
      }
    });
  }
}
