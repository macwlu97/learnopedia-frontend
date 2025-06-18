import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BlockTableComponent } from './pages/block-table/block-table.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'blocks', component: BlockTableComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
