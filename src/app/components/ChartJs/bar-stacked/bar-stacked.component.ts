import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-bar-stacked',
  templateUrl: './bar-stacked.component.html',
  styleUrls: ['./bar-stacked.component.css'],
})
export class BarStackedComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [1, 2, 3], label: 'Approved', stack: 'a' },
    { data: [1, 2, 3], label: 'Accepted', stack: 'a' },
    { data: [1, 2, 3], label: 'Open', stack: 'a' },
    { data: [1, 2, 3], label: 'In Progress', stack: 'a' },
  ];
  public barChartLabels: string[] = ['P', 'R', 'B'];
  constructor() {}

  ngOnInit(): void {}

  // events
  // public chartClicked({
  //   event,
  //   active,
  // }: {
  //   event: MouseEvent;
  //   active: {}[];
  // }): void {
  //   console.log(event, active);
  // }
  public chartClicked(e: any) {
    console.log(e);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40,
    ];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
