import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  showFiller = false;

  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  constructor() {}

  ngOnInit(): void {}
}
