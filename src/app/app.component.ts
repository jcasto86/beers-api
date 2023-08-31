import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  /**
   * General App Title.
   */
  appTitle: string = 'beers app';

  constructor() { }
}
