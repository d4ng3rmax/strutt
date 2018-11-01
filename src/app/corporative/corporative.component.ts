import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporative',
  templateUrl: './corporative.component.html',
  styleUrls: ['./corporative.component.scss']
})
export class CorporativeComponent implements OnInit {

  slides = '012'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `assets/images/cor-00${num}.jpg`
    };
  });

  constructor() { }

  ngOnInit() {
  }

}
