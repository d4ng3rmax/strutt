declare var require: any;
const data: any = require('../_shared/home.json');
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = '012'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `assets/images/pic-00${num}.jpg`,
      title: `${data[num].title}`,
      text: `${data[num].text}`
    };
  });

  constructor() { }

  ngOnInit() {
  }

}
