import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ArticleComponent } from './pages/article/article.component';
import { QuizComponent } from './pages/quiz/quiz.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticleComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'quiz', component: QuizComponent },
  // { path: 'article', component: ArticleComponent },
  // { path: '', redirectTo: '/articles', pathMatch: 'full' },
  // { path: '**', redirectTo: '/articles' },

  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];