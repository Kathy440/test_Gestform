import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  list: any = [];

  ngOnInit(): void {
    this.list = this.getNb(10, -1000, 1000);
  }

  getNb(quantity: number,  min: number, max: number) {
    var arr: object[] = [];
    while (arr.length <= quantity) {
      var n: any = Math.floor(Math.random() * (max - min + 1)) + min;
      if (arr.indexOf(n) === -1) arr.push({ number: n, name: this.getName(n) });
    }
    return arr;
  }

  getName(n: number) {
    if (n % 3 === 0 && n % 5 === 0) {
      return 'GestForm';
    } else if (n % 3 === 0) {
      return 'Geste';
    } else if (n % 5 === 0) {
      return 'Forme';
    }
    else return n;
  }
}
