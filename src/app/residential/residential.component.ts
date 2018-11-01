import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.scss']
})
export class ResidentialComponent implements OnInit {

  slides = '012'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `assets/images/res-00${num}.jpg`
    };
  });

  constructor() { }

  ngOnInit() {
  }

}
