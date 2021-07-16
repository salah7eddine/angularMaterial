import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-doughnut2-chart',
  templateUrl: './doughnut2-chart.component.html',
  styleUrls: ['./doughnut2-chart.component.css'],
})
export class Doughnut2ChartComponent implements OnInit {
  // Doughnut chart

  // @ViewChild('myChart') myChart!: ElementRef;
  @ViewChild('myChart', { static: true }) myChart!: ElementRef;
  ctx: any;

  ngAfterViewInit() {
    this.ctx = this.myChart.nativeElement.getContext('2d');
    console.log(this.ctx);
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this.myChart);
    this.myChart.nativeElement.value = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: ['Dairy', 'Fruits', 'Lean meats', 'Vegetables', 'Whole grains'],
        datasets: [
          {
            data: [27.92, 17.53, 14.94, 26.62, 12.99],
            backgroundColor: [
              '#e91e63',
              '#00e676',
              '#ff5722',
              '#1e88e5',
              '#ffd600',
            ],
            borderWidth: 0.5,
            borderColor: '#ddd',
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Recommended Daily Diet',
          position: 'top',
          fontSize: 16,
          fontColor: '#111',
          padding: 20,
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            boxWidth: 20,
            fontColor: '#111',
            padding: 15,
          },
        },
        tooltips: {
          enabled: false,
        },
        plugins: {
          datalabels: {
            color: '#111',
            textAlign: 'center',
            font: {
              lineHeight: 1.6,
            },
            formatter: (value: any, ctx: any) =>
              ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%',
          },
        },
      },
    });
  }
}
