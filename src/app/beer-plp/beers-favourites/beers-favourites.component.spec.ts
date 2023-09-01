import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeersFavouritesComponent } from './beers-favourites.component';

describe('BeersFavouritesComponent', () => {
  let component: BeersFavouritesComponent;
  let fixture: ComponentFixture<BeersFavouritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeersFavouritesComponent],
    });

    fixture = TestBed.createComponent(BeersFavouritesComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize favouriteBeersIds from local storage', () => {

    const mockFavouriteBeers = ['1', '2', '3'];
    const localStorageSpy = spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockFavouriteBeers));

    component.ngOnInit();

    expect(component.favouriteBeersIds).toEqual(mockFavouriteBeers);
    expect(localStorageSpy).toHaveBeenCalledWith('favouriteBeers');
  });

  it('should handle missing data in local storage', () => {

    const localStorageSpy = spyOn(localStorage, 'getItem').and.returnValue(null);
    component.ngOnInit();

    expect(component.favouriteBeersIds).toBeUndefined();
    expect(localStorageSpy).toHaveBeenCalledWith('favouriteBeers');
  });
});