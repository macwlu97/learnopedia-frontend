import { Component, OnInit } from '@angular/core';
import { ArticleDataService } from '../../services/article.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  stats: any;

  constructor(private articleDataService: ArticleDataService) {}

  ngOnInit(): void {
    // this.blockService.getStats().subscribe(data => {
    //   this.stats = data;
    // });
  }
}
