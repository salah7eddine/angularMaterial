import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-doughnut-d3js',
  templateUrl: './doughnut-d3js.component.html',
  styleUrls: ['./doughnut-d3js.component.css'],
})
export class DoughnutD3jsComponent implements OnInit {
  private data = [
    { Framework: 'Backbone', Stars: '27647', Released: '2010' },
    { Framework: 'Vue', Stars: '166443', Released: '2014' },
    { Framework: 'React', Stars: '150793', Released: '2013' },
    { Framework: 'Ember', Stars: '21471', Released: '2011' },
    { Framework: 'Angular', Stars: '62342', Released: '2016' },
  ];
  private svg?: any;

  // set the dimensions and margins of the graph
  private width = 550;
  private height = 550;
  private margin = 50;
  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors?: any;
  private pie?: any;
  private arc?: any;
  private outerArc?: any;

  constructor() {}

  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
    // this.createPolylines()
  }

  private createSvg(): void {
    this.svg = d3
      .select('figure#doughnut')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.width / 2 + ',' + this.height / 2 + ')'
      );
  }

  private createColors(): void {
    // this.colors = d3
    //   .scaleOrdinal()
    //   .domain(this.data.map((d) => d.Stars.toString()))
    //   .range(['#c7d3ec', '#a5b8db', '#879cc4', '#677795', '#5a6782']);
    this.colors = d3
      .scaleOrdinal()
      .domain(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])
      .range(d3.schemeDark2);
  }

  private drawChart(): void {
    // Compute the position of each group on the pie:
    // const pie = d3.pie<any>().value((d: any) => Number(d.Stars));
    this.pie = d3
      .pie<any>()
      .sort(null) // Do not sort group by size
      .value((d: any) => Number(d.Stars));

    // The arc generator
    this.arc = d3
      .arc()
      .innerRadius(this.radius * 0.5) // This is the size of the donut hole
      .outerRadius(this.radius * 0.8);

    // Another arc that won't be drawn. Just for labels positioning
    this.outerArc = d3
      .arc()
      .innerRadius(this.radius * 0.9)
      .outerRadius(this.radius * 0.9);

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    this.svg
      .selectAll('allSlices')
      .data(this.pie(this.data))
      .enter()
      .append('path')
      .text((d: any) => d.data.Framework)
      .attr('d', this.arc)
      .attr('fill', (d: any) => {
        console.log(d);
        // return '#c7d3ec';
        return this.colors(d.data.Stars);
      })
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .style('opacity', 0.7);
  }

  createPolylines() {
    // Add the polylines between chart and labels:
    this.svg
      .selectAll('allPolylines')
      // .transition()
      // .duration(750)
      // .delay((d: any, i: number) =>  i * 10)
      // .attr("r", (d: any) => Math.sqrt(d * scale))
      .data(this.pie(this.data))
      .enter()
      .append('polyline')
      .attr('stroke', 'black')
      .style('fill', 'none')
      .attr('stroke-width', 1)
      .attr('points', (d: any) => {
        var posA = this.arc.centroid(d); // line insertion in the slice
        var posB = this.outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
        var posC = this.outerArc.centroid(d); // Label position = almost the same as posB
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
        posC[0] = this.radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        return [posA, posB, posC];
      });

    // Add the polylines between chart and labels:
    this.svg
      .selectAll('allLabels')
      .data(this.pie(this.data))
      .enter()
      .append('text')
      .text((d: any) => {
        return d.data.Framework;
      })
      .attr('transform', (d: any) => {
        var pos = this.outerArc.centroid(d);
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = this.radius * 0.99 * (midangle < Math.PI ? 1 : -1);
        return 'translate(' + pos + ')';
      })
      .style('text-anchor', (d: any) => {
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midangle < Math.PI ? 'start' : 'end';
      });
  }
}
