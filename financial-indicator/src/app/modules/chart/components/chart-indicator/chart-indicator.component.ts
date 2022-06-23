import { Component, Input, OnChanges } from '@angular/core';
import { Indicator } from 'src/app/interfaces/indicator';
import * as moment from 'moment';

@Component({
  selector: 'app-chart-indicator',
  templateUrl: './chart-indicator.component.html',
  styleUrls: ['./chart-indicator.component.css']
})
export class ChartIndicatorComponent implements OnChanges {

  @Input() indicatorType: string;
  @Input() indicatorModels: Array<Indicator>;

  public valueToday: number;
  public isGrowth: boolean;
  public today: string;

  constructor() {
    this.valueToday = 0;
    this.isGrowth = false;
    this.today = moment().format('DD-MM-YYYY');
  }

  ngOnChanges(): void {
    this.setValueToday();
    this.setGrowth();
  }

  private setValueToday(): void {

    if (this.indicatorModels) {

      this.valueToday = parseFloat(this.indicatorModels[this.indicatorModels.length - 1].Valor);

    } else {

      this.valueToday = 0;
    }
  }

  private setGrowth(): void {

    if (this.indicatorModels) {

      const indicatorReverseModels = this.indicatorModels.slice().reverse();

      const currentValue = parseFloat(indicatorReverseModels[0].Valor);
      const lastValue = parseFloat(indicatorReverseModels[1].Valor);

      this.isGrowth = (currentValue > lastValue);

    } else {

      this.isGrowth = false;
    }
  }


}
