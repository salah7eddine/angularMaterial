import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-sticky-menu',
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./sticky-menu.component.css'],
})
export class StickyMenuComponent implements OnInit {
  @ViewChild('stickyMenu') menuElement!: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  panelOpenState = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
