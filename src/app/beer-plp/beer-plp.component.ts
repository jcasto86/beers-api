import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { Beer } from '../models/beer-data.model';
import { PunkService } from '../punk.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-beer-plp',
  templateUrl: './beer-plp.component.html',
  styleUrls: ['./beer-plp.component.scss'],
})
export class BeerPlpComponent implements OnInit {
  /**
   * Observable that collects the current component data from the API.
   */
  beers$?: Observable<Beer[]>;

  /**
   * Error message for not loaded/found beers.
   */
  notLoadedMessage: string = 'Apologize, beers not found.';

  /**
   * Search beers query. Empty by default to show all the beers.
   */
  query: string = '';

  /**
   * Indicates the number of beer cards showed in each page.
   */
  itemsPerPage: number = 12;

  /**
   * Indicates the current page. Page 1 by default.
   */
  currentPage: number = 1;

  /**
   * Indicates the total number of beer received from de API.
   */
  totalBeers: number = 0;

  /**
   * Saves the number of pages in the PLP based on totalBeers and itemsPerPage.
   */
  pageNumbers: number[] = [];

  searchForm!: FormGroup;

  constructor(private punkService: PunkService) { }

  ngOnInit() {
    this.loadBeers();
  }

  /**
   * Loads beers based on pagination settings,
   * fetchs the total number of beers and
   * updates pageNumbers array based on totalBeers and itemsPerPage.
   */
  loadBeers() {
    this.beers$ = this.punkService.getPaginatedBeers(
      this.itemsPerPage,
      this.currentPage,
    );

    this.punkService.getAllBeers().subscribe((beers) => {
      this.totalBeers = beers.length;
      this.pageNumbers = Array.from(
        { length: Math.ceil(this.totalBeers / this.itemsPerPage) },
        (_, index) => index + 1
      );
    });
  }

  /**
   * Changes the current page to the specified newPage value and reloads the list of beers for that page.
   *
   * @param newPage The page number to navigate to.
   */
  changePage(newPage: number): void {
    this.currentPage = newPage;
    this.loadBeers();
  }

  // /**
  //  * Method used for searching beers in the API through the punkService.
  //  * If the input is empty, it get all the beers. Uses search(query)
  //  * If there is a search term, it gets all the beers that match the name (limited to 10). Uses getAllBeers()
  //  */
  // searchBeer() {
  //   this.query.trim() !== ''
  //     ? (this.beers$ = this.punkService.search(this.query))
  //     : this.loadBeers();

  //   console.log('Query:', this.query);
  // }

  searchBeer() {
    if (this.query.trim() !== '') {
      setTimeout(() => {
        this.beers$ = this.punkService.getAllBeers().pipe(
          map(beers => beers.filter(beer => beer.name.toLowerCase().startsWith(this.query.trim().toLowerCase()))),
        );
      }, 1000);
    } else {
      this.loadBeers();
    }
  }
}