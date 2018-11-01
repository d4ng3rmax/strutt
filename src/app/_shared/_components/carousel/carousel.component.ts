import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  // data;
  @Input() slides;
  @Input() hasBg;

  index = 0;
  speed = 10000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;

  constructor() { }

  indexChanged(index) {
    // console.log(index);
  }

  ngOnInit() {
  }

}
