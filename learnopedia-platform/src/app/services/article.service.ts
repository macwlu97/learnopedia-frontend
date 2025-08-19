import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
  private apiUrl = 'http://localhost:8081/articles'; // adapt to your backend

  constructor(private http: HttpClient) {}

  // Importing an article from Wikipedia and saving it to the backend
  importFromWikipedia(title: string): Observable<Article> {
    return this.http.post<Article>(`${this.apiUrl}/import`, null, { params: { title } });
  }

  // Downloading an article by ID
  getArticle(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }
}
