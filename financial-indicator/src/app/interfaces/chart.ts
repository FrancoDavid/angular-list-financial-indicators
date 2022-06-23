export interface ChartData {
    name: string;
    series: Array<ChartSeries>;
}

export interface ChartSeries {
    name: string;
    value: number;
}

export interface ChartColorScheme {
    domain: Array<string>;
}


