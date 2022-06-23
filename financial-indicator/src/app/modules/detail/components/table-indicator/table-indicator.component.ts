import { Component, Input, OnInit } from '@angular/core';
import { Indicator } from 'src/app/interfaces/indicator';

@Component({
  selector: 'app-table-indicator',
  templateUrl: './table-indicator.component.html',
  styleUrls: ['./table-indicator.component.css']
})
export class TableIndicatorComponent implements OnInit {

  @Input() indicatorModels: Array<Indicator>;

  constructor() { }

  ngOnInit(): void {
  }

  public trackByTableIndicator(index: number): number {
    return index;
  }

}
