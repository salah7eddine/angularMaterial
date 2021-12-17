import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  selectable = true;
  x = "2";
  y = "10"


  filter = [
    { name: "filter1", checked: true },
    { name: "filter2", checked: false },
    { name: "filter3", checked: true },
    { name: "filter4", checked: true },
    { name: "filter5", checked: false },
    { name: "filter6", checked: true },
  ]
  constructor() { }

  ngOnInit(): void {
    console.log("x < y")
    console.log(this.x < this.y)
  }

  updateAllComplete(filter: any) {
    console.log(filter)
  }

}
