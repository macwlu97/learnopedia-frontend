import { Component, OnInit } from '@angular/core';
import { BlockInfo } from '../../models/block-info.model';
import { BlockDataService } from '../../services/block-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-block-table',
  templateUrl: './block-table.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class BlockTableComponent implements OnInit {
  blocks: BlockInfo[] = [];

  constructor(private blockService: BlockDataService) {}

  ngOnInit(): void {
    this.blockService.getBlocks().subscribe(data => {
      this.blocks = data;
    });
  }
}
