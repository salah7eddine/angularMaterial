import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, NgZone, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { timer } from 'rxjs';
import { filter, map, pairwise, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-some-forms',
  templateUrl: './some-forms.component.html',
  styleUrls: ['./some-forms.component.css']
})
export class SomeFormsComponent implements OnInit {

  title = 'My Angular Form Validation Example';
  myForm: FormGroup = new FormGroup({
    username: new FormControl(),
  });

  listItems: any = [];
  @ViewChild('scroller') scroller!: CdkVirtualScrollViewport;
  loading: boolean = false;



  constructor(private fb: FormBuilder, private ngZone: NgZone) {
    this.createForm();
  };

  ngOnInit(): void {
    this.fetchMore()
  }

  ngAfterViewInit(): void {
    this.scroller.elementScrolled().pipe(
      map(() => this.scroller.measureScrollOffset('bottom')),
      pairwise(),
      filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
      throttleTime(200)
    ).subscribe(() => {
      this.ngZone.run(() => {
        console.log("call fetchMore")
        this.fetchMore();
      });
    })
  }

  createForm() {
    this.myForm = this.fb.group({
      username: ['', Validators.required]
    });
  }

  fetchMore(): void {
    const images = ['IuLgi9PWETU', 'fIq0tET6llw', 'xcBWeU4ybqs', 'YW3F-C5e8SE', 'H90Af2TFqng'];

    const newItems: any = [];
    for (let i = 0; i < 50; i++) {
      const randomListNumber = Math.round(Math.random() * 100);
      const randomPhotoId = Math.round(Math.random() * 4);
      newItems.push({
        title: 'List Item ' + randomListNumber,
        content: 'This is some description of the list - item # ' + randomListNumber,
        image: `https://source.unsplash.com/${images[randomPhotoId]}/50x50`
      });
    }

    this.loading = true;
    timer(1000).subscribe(() => {
      this.loading = false;
      this.listItems = [...this.listItems, ...newItems];
    });

    // this.listItems = [...this.listItems, ...newItems];
  }


}
