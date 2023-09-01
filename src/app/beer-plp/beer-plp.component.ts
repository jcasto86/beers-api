import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { Beer } from '../models/beer-data.model';
import { FormGroup } from '@angular/forms';
import { PunkService } from '../punk.service';

@Component({
  selector: 'app-beer-plp',
  templateUrl: './beer-plp.component.html',
  styleUrls: ['./beer-plp.component.scss'],
})
export class BeerPlpComponent implements OnInit, OnDestroy {
  /**
   * Observable that collects the current component data from the API.
   */
  beers$?: Observable<Beer[]>;

  /**
   * Subject used to debounce user input in the search input field.
   * It delays emitting values until a specific time since the last emission.
   */
  private debouncer: Subject<string> = new Subject<string>();

  /**
   * Subscription to the debouncer observable.
   * It allows tracking and managing the subscription to debounce user input.
   */
  private debouncerSubscription?: Subscription;

  /**
   * Error message for not loaded/found beers.
   */
  notLoadedMessage: string = 'Apologize, beers not found.';

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

  constructor(private punkService: PunkService) { }

  ngOnInit() {
    this.loadBeers();
    this.debouncerSubscription = this.debouncer.pipe(debounceTime(300)).pipe(tap(value => this.searchBeer(value))).subscribe(value => console.log('Debouncer value: ', value))
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe()
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

  /**
   *  Method used for searching beers in the API through the punkService.
   *  It looks for beers that match the search box query.
   */
  searchBeer(query: string) {
    if (query.trim() !== '') {
      this.beers$ = this.punkService.getAllBeers().pipe(
        map(beers => beers.filter(beer => beer.name.toLowerCase().includes(query.trim().toLowerCase()))),
      );
    } else {
      this.loadBeers();
    }
    console.log('Search Beer: ', query);
  }

  /**
   * Handles key presses in the search input field by debouncing the input and triggering a search.
   * 
   * @param query 
   */
  onKeyPress(query: string) {
    this.debouncer.next(query);
  }
}