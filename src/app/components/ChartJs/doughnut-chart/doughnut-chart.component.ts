import { Component, OnInit } from '@angular/core';
import { ChartLegendLabelOptions, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
// import * as ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
})
export class DoughnutChartComponent implements OnInit {
  data: any = [55, 25, 20];

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
  // plugin: typeof ChartDataLabels;
  plugins = [ChartDataLabels];

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
    // legend: {
    //   display: true,
    //   position: 'right',
    //   fullWidth: true,
    //   reverse: true,
    //   labels: {
    //     fontColor: '#000080',
    //   },
    // },
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 20,
        fontColor: '#111',
        padding: 15,
      },
    },
    tooltips: {
      enabled: true,
    },
    // plugins: {
    //   datalabels: {
    //     color: '#111',
    //     textAlign: 'center',
    //     font: {
    //       lineHeight: 1.6,
    //     },
    //     formatter: (value: any, ctx: any) => {
    //       console.log(value);
    //       console.log(ctx);
    //       return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
    //     },
    //   },
    // },
    // plugins: [ChartDataLabels],
    // plugins: {
    //   datalabels: {
    //     color: '#fff',
    //     display: true,
    //     formatter: function (value, ctx) {
    //       return ((value * 100) / total).toFixed(2) + '%';
    //       // return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
    //     },
    //   },
    // },
    // plugins: {
    //   datalabels: {
    //     color: '#111',
    //     textAlign: 'center',
    //     font: {
    //       lineHeight: 1.6,
    //     },
    //     formatter: (value: any, ctx: any) =>
    //       ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%',
    //   },
    // },
    // plugins: {
    //   datalabels: {
    //     color: '#111',
    //     textAlign: 'center',
    //     font: {
    //       lineHeight: 1.6,
    //     },
    //     formatter: (value: any, ctx: any) =>
    //       ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%',
    //   },
    // },
    // plugins: {
    //   datalabels: {
    //     color: '#111',
    //     textAlign: 'center',
    //     font: {
    //       lineHeight: 1.6,
    //     },
    //     formatter: function (value: any, ctx: any) {
    //       return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
    //     },
    //   },
    // },
    // plugins: {
    //   datalabels: {
    //     formatter: (value: any, ctx: any) => {
    //       console.log(value);
    //       let sum = 0;
    //       let dataArr = ctx.chart.data.datasets[0].data;
    //       dataArr.map((data: any) => {
    //         sum += data;
    //       });
    //       let percentage = ((value * 100) / sum).toFixed(2) + '%';
    //       return percentage;
    //     },
    //     color: '#fff',
    //   },
    // },
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

  constructor() {
    // this.plugin = ChartDataLabels;
  }

  ngOnInit(): void {
    // this.doughnutChartData.push(this.data);
    let total = this.data.reduce(this.reducer);

    this.options.plugins = {
      datalabels: {
        color: '#fff',
        display: true,
        formatter: function (value, ctx) {
          // return ((value * 100) / total).toFixed(2) + '%';
          // ctx.fillText(total,  / 2 - 20,  / 2, 200);

          return ctx.chart.data.labels
            ? ctx.chart.data.labels[ctx.dataIndex] +
                '\n' +
                ((value * 100) / total).toFixed(2) +
                '%'
            : '';
        },
      },
    };
  }
  /* get total */
  reducer = (accumulator: number, currentValue: number) =>
    accumulator + currentValue;
}
