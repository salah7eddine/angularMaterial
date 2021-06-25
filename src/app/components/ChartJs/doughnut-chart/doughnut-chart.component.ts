import { Component, OnInit } from '@angular/core';
import { ChartLegendLabelOptions, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
})
export class DoughnutChartComponent implements OnInit {
  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [[55, 25, 20]];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartLabel: ChartLegendLabelOptions = {
    boxWidth: 50,
    fontSize: 50,
    fontStyle: '',
    fontColor: '',
  };
  colors: Color[] = [
    {
      pointRadius: 10,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
    },
  ];

  public options: ChartOptions = {
    responsive: true,
    responsiveAnimationDuration: 10,
    title: {
      display: true,
      text: 'Chart Doughnut',
    },
    // legend: {
    //   display: true,
    //   position: 'right', // bottom
    // },
    legend: {
      display: true,
      position: 'right',
      fullWidth: true,
      reverse: true,
      labels: {
        fontColor: '#000080',
      },
    },
    tooltips: {
      enabled: true,
    },
    plugins: {
      datalabels: {
        formatter: (value: any, ctx: any) => {
          console.log(value);
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data: any) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + '%';
          return percentage;
        },
        color: '#fff',
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true,
    //       },
    //     },
    //   ],
    // },

    // cutoutPercentage: 50,
    // animation: {
    //   animateScale: true,
    // },
    // tooltips: {
    //   enabled: true,
    // },
    // plugins: {
    //   datalabels: {
    //     formatter: (value: any) => {
    //       return value + '%';
    //     },
    //   },
    // },
    // legend: {
    //   display: true,
    //   position: 'right', // <=========== change this to the position you like. 'bottom'
    // },
    // title: {
    //   display: false,
    //   text: 'Total de la recherche', // Total Research
    // },
    // ... and so on. see below about options
  };

  constructor() {}

  ngOnInit(): void {}
}
