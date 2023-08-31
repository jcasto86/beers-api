import { Component, HostBinding, Input } from '@angular/core';
import { BeerCard } from './beer-card-data.model';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss'],
})
export class BeerCardComponent {
  /**
   * Applies a class to the root element.
   */
  @HostBinding('class') class = 'app-beer-card';

  /**
   * Receives a Beer Data from the parent component
   */
  @Input() cardData: BeerCard = {};

  constructor() { }

  formatNameForURL(name: string): string {
    return name.replace(/ /g, '-').toLowerCase();
  }
}
