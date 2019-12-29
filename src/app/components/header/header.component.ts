import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: `./header.component.html`,
  // template: `<h1>Header component</h1>`
  styleUrls: [
    'header.component.scss'
  ]
})
class HeaderComponent {
  arr: string[] = [];
  show: boolean = true;

  constructor() {
    this.arr = [
      'hell1',
      'hell2',
      'hell3',
      'hell4',
      'hell5',
      'hell6',
    ];
  }
  onClick() {
    console.log('onclick');
    this.show = !this.show;
  }
}

export default HeaderComponent;
