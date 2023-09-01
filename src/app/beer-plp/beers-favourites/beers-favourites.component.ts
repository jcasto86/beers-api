import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beers-favourites',
  templateUrl: './beers-favourites.component.html',
  styleUrls: ['./beers-favourites.component.scss']
})
export class BeersFavouritesComponent implements OnInit {
  /**
   * Array of favourite beers ids.
   */
  favouriteBeersIds?: string[]

  constructor() { }

  ngOnInit(): void {
    console.log('Favourite beers: ', localStorage.getItem('favouriteBeers'));
    const favouriteBeersString = localStorage.getItem('favouriteBeers');
    if (favouriteBeersString) {
      this.favouriteBeersIds = JSON.parse(favouriteBeersString);
    }
  }
}
