import { Component, OnInit } from '@angular/core';
import { BlockDataService } from '../../services/block-data.service';

@Component({
  selector: 'app-block-table',
  templateUrl: './block-table.component.html',
})
export class BlockTableComponent implements OnInit {
  blocks: any[] = [];

  constructor(private blockService: BlockDataService) {}

  ngOnInit(): void {
    this.blockService.getCurrentBlocks().subscribe(data => {
      this.blocks = data;
    });
  }
}
