import { Component, OnInit } from '@angular/core';
import { LoggerServiceService } from '../services/logger-service.service';
import { WorkWithApiService } from '../services/work-with-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  selectable = true;
  x = "2";
  y = "10"

  posts: any;


  filter = [
    { name: "filter1", checked: true },
    { name: "filter2", checked: false },
    { name: "filter3", checked: true },
    { name: "filter4", checked: true },
    { name: "filter5", checked: false },
    { name: "filter6", checked: true },
  ]
  constructor(private workWithApiService: WorkWithApiService, private loggerService: LoggerServiceService) { }

  ngOnInit(): void {
    this.getDataForPosts();
  }

  updateAllComplete(filter: any) {
    console.log(filter)
  }


  getDataForPosts() {
    this.workWithApiService.getPostsData().subscribe(data => {
      this.posts = data;
    })
  }

}
