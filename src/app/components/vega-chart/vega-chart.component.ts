import { Component, OnInit } from '@angular/core';
// import embed from 'vega-embed';

@Component({
  selector: 'app-vega-chart',
  templateUrl: './vega-chart.component.html',
  styleUrls: ['./vega-chart.component.css'],
})
export class VegaChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const spec = {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      description: 'Simple bar chart',
      // data: {
      //   values: [
      //     { x: 'A', y: 28 },
      //     { x: 'y', B: 55 },
      //     { x: 'C', y: 43 },
      //     { x: 'D', y: 91 },
      //     { x: 'E', y: 81 },
      //     { x: 'F', y: 53 },
      //     { x: 'G', y: 19 },
      //     { x: 'H', y: 87 },
      //     { x: 'I', y: 52 },
      //   ],
      // },
      mark: 'bar',
      encoding: {
        x: { field: 'x', type: 'ordinal' },
        y: { field: 'y', type: 'quantitative' },
      },
    };

    // embed('#vis', spec, { actions: false });
  }
}
