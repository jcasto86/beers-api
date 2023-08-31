import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { BeerCard } from './beer-card-data.model';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss'],
})
export class BeerCardComponent implements OnInit {
  /**
   * Applies a class to the root element.
   */
  @HostBinding('class') class = 'app-beer-card';

  isFavourite: boolean = false;

  /**
   * Receives a Beer Data from the parent component
   */
  @Input() cardData: BeerCard = {};

  constructor() { }

  ngOnInit(): void {
    const favouriteBeersString = localStorage.getItem('favouriteBeers');
    const favouriteBeers = favouriteBeersString ? JSON.parse(favouriteBeersString) : [];

    this.isFavourite = favouriteBeers.includes(this.cardData.id)
  }

  formatNameForURL(name: string): string {
    return name.replace(/ /g, '-').toLowerCase();
  }

  toggleFavourite() {
    this.isFavourite = !this.isFavourite;
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    const favouriteBeers = JSON.parse(localStorage.getItem('favouriteBeers') || '[]');

    if (this.isFavourite) {
      if (!favouriteBeers.includes(this.cardData.id)) {
        favouriteBeers.push(this.cardData.id);
      }
    } else {
      const index = favouriteBeers.indexOf(this.cardData.id);
      if (index !== -1) {
        favouriteBeers.splice(index, 1);
      }
    }

    localStorage.setItem('favouriteBeers', JSON.stringify(favouriteBeers));
  }
}
