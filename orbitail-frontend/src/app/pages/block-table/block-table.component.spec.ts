import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTableComponent } from './block-table.component';

describe('BlockTableComponent', () => {
  let component: BlockTableComponent;
  let fixture: ComponentFixture<BlockTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
