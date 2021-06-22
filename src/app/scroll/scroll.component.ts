import { Component, OnInit } from '@angular/core';
import { WorkWithApiService } from '../services/work-with-api.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css'],
})
export class ScrollComponent implements OnInit {
  public albumDetails: any = [];
  constructor(private myService: WorkWithApiService) {}

  ngOnInit(): void {
    this.myService.getData().subscribe((data: any) => {
      this.albumDetails = Array.from(Object.keys(data), (k) => data[k]);
      console.log(this.albumDetails);
    });
  }
}
