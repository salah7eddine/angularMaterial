import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-bar-stacked2',
  templateUrl: './bar-stacked2.component.html',
  styleUrls: ['./bar-stacked2.component.css'],
})
export class BarStacked2Component implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    plugins: {
      datalabels: {
        display: false,
      },
    },
    //  scale: {},
    scales: {
      display: false,
      stepSize: 5,
      yAxes: [
        {
          display: false,
          gridLines: {
            drawBorder: false,
          },
        },
      ],
      xAxes: [
        {
          distribution: 'linear',
          display: false,
          gridLines: {
            drawBorder: false,
          },
        },
      ],
    },
    layout: {
      padding: 0,
    },
  };
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [2], label: 'Approved', stack: 'a' },
    { data: [7], label: 'Accepted', stack: 'a' },
    { data: [1], label: 'Open', stack: 'a' },
    { data: [9], label: 'In Progress', stack: 'a' },
  ];
  public barChartLabels: string[] = [];

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
