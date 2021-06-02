import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { ChartsComponent } from './components/charts/charts.component';
import { BarChartComponent } from './components/ChartJs/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/ChartJs/doughnut-chart/doughnut-chart.component';
import { DashboardComponent } from './components/ChartJs/dashboard/dashboard.component';
import { RadarChartComponent } from './components/ChartJs/radar-chart/radar-chart.component';
import { PieChartComponent } from './components/ChartJs/pie-chart/pie-chart.component';
import { BubbleChartComponent } from './components/ChartJs/bubble-chart/bubble-chart.component';
import { LineChartComponent } from './components/ChartJs/line-chart/line-chart.component';
import { BarD3jsComponent } from './components/D3js/bar-d3js/bar-d3js.component';
import { DoughnutD3jsComponent } from './components/D3js-Chart/doughnut-d3js/doughnut-d3js.component';
import { D3jsComponent } from './components/D3js/d3js.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    MainNavComponent,
    HomeComponent,
    AboutComponent,
    InfoComponent,
    DashboardComponent,
    ChartsComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    BubbleChartComponent,
    LineChartComponent,
    BarD3jsComponent,
    D3jsComponent,
    DoughnutD3jsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
