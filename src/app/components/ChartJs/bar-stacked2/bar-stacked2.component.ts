import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';

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
      enabled: true,
      caretSize: 200
    },
    plugins: {
      datalabels: {
        display: false,
      },
    },
    //  scale: {},
    scales: {
      display: true,
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

  colors: Color[] = [
    {
      pointRadius: 10,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(253,228,54)',
        'rgb(49,253,186)',
        'rgb(253, 107, 40)',
        'rgb(183,110,146)',
        'rgb(71,232,0)',
        'rgb(105,254,44)',
        'rgb(59,204,234)',
        'rgb(199,22,59)',
        'rgb(188,154,114)',
        'rgb(18,160,21)',
      ],
    },
  ];

  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [0.0], label: 'EUROPE', stack: 'a' },
    { data: [5836.0], label: 'FRANCE', stack: 'a' },
    { data: [97.0], label: 'GERMANY', stack: 'a' },
    { data: [212.0], label: 'UK', stack: 'a' },
    { data: [36.0], label: 'ITALY', stack: 'a' },
    { data: [33.0], label: 'SPAIN', stack: 'a' },
    { data: [0.0], label: 'UNITED_STATES', stack: 'a' },
    { data: [0.0], label: 'CHINA', stack: 'a' },
    { data: [0.0], label: 'JAPAN', stack: 'a' },
  ];
  //'EUROPE', 'FRANCE', 'GERMANY', 'UK', 'ITALY', 'SPAIN', 'UNITED_STATES', 'CHINA', 'JAPAN'
  public barChartLabels: string[] = ['Geographical area'];
  

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
