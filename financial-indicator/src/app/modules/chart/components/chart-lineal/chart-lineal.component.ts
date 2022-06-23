import { Component, Input, OnChanges } from '@angular/core';

import { ChartColorScheme, ChartData, ChartSeries } from 'src/app/interfaces/chart';
import { Indicator } from 'src/app/interfaces/indicator';

import * as moment from 'moment';

@Component({
  selector: 'app-chart-lineal',
  templateUrl: './chart-lineal.component.html',
  styleUrls: ['./chart-lineal.component.css']
})
export class ChartLinealComponent implements OnChanges {

  @Input() nameLegend: string;
  @Input() indicatorModels: Array<Indicator>;

  public chartData: Array<ChartData>;
  public chartSeries: Array<ChartSeries>;
  public chartViewSize: Array<number>;
  public chartColorScheme: ChartColorScheme;

  constructor() {
    this.chartData = [];
    this.chartSeries = [];
    this.chartViewSize = [700, 500];
    this.chartColorScheme = {
      domain: ['#5AA454']
    };
  }

  ngOnChanges(): void {
    this.setDataChart();
  }

  private setDataChart(): void {

    this.setSeriesChart();

    const data = [{
      name: this.nameLegend,
      series: this.chartSeries.slice()
    }];

    this.chartData = data.slice();
  }

  private setSeriesChart(): void {

    if (this.indicatorModels) {

      this.chartSeries = this.indicatorModels.map(({Fecha, Valor}) => {
        return {
          name: moment(Fecha, 'YYYY-MM-DD').format('DD MMM YYYY'),
          value: parseFloat(Valor)
        };
      });

    } else {

      this.chartSeries =  [];
    }

  }

}
