import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { D3jsComponent } from './components/D3js/d3js.component';
import { VegaComponent } from './components/vega/vega.component';
import { WorkComponent } from './components/work/work.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'info', component: InfoComponent },
  { path: 'info-d3js', component: D3jsComponent },
  { path: 'vega', component: VegaComponent },
  { path: 'work', component: WorkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
