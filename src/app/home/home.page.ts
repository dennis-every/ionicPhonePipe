import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  number: string;

  constructor() {}

  ngOnInit() {
    this.number = "8490001234";
  }

}
