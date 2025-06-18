import { Component, OnInit } from '@angular/core';
import { BlockDataService } from '../../services/block-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  stats: any;

  constructor(private blockService: BlockDataService) {}

  ngOnInit(): void {
    // this.blockService.getStats().subscribe(data => {
    //   this.stats = data;
    // });
  }
}
