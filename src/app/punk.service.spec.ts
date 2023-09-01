import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PunkService } from './punk.service';
import { Beer } from './models/beer-data.model';
import { mockBeer } from './mocks/beer.mock';

describe('PunkService', () => {
  let service: PunkService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PunkService]
    });

    service = TestBed.inject(PunkService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve beers using getAllBeers', () => {
    const mockBeers: Beer[] = [mockBeer];

    service.getAllBeers().subscribe((beers) => {
      expect(beers).toEqual(mockBeers);
    });

    const req = httpTestingController.expectOne('https://api.punkapi.com/v2/beers?per_page=80');
    expect(req.request.method).toEqual('GET');
    req.flush(mockBeers);
  });

  it('should retrieve beers using search', () => {
    const query = 'sample-query';
    const mockBeers: Beer[] = [mockBeer];

    service.search(query).subscribe((beers) => {
      expect(beers).toEqual(mockBeers);
    });

    const req = httpTestingController.expectOne(`https://api.punkapi.com/v2/beers?beer_name=${query}&per_page=10`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockBeers);
  });

  it('should retrieve beer by id using getBeerById', () => {
    const id = '1';
    const mockBeer: Beer[] = [{ "id": 1, "name": "Buzz", "tagline": "A Real Bitter Experience.", "first_brewed": "09/2007", "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.", "image_url": "https://images.punkapi.com/v2/keg.png", "abv": 4.5, "ibu": 60, "target_fg": 1010, "target_og": 1044, "ebc": 20, "srm": 10, "ph": 4.4, "attenuation_level": 75, "volume": { "value": 20, "unit": "litres" }, "boil_volume": { "value": 25, "unit": "litres" }, "method": { "mash_temp": [{ "temp": { "value": 64, "unit": "celsius" }, "duration": 75 }], "fermentation": { "temp": { "value": 19, "unit": "celsius" } }, "twist": null }, "ingredients": { "malt": [{ "name": "Maris Otter Extra Pale", "amount": { "value": 3.3, "unit": "kilograms" } }, { "name": "Caramalt", "amount": { "value": 0.2, "unit": "kilograms" } }, { "name": "Munich", "amount": { "value": 0.4, "unit": "kilograms" } }], "hops": [{ "name": "Fuggles", "amount": { "value": 25, "unit": "grams" }, "add": "start", "attribute": "bitter" }, { "name": "First Gold", "amount": { "value": 25, "unit": "grams" }, "add": "start", "attribute": "bitter" }, { "name": "Fuggles", "amount": { "value": 37.5, "unit": "grams" }, "add": "middle", "attribute": "flavour" }, { "name": "First Gold", "amount": { "value": 37.5, "unit": "grams" }, "add": "middle", "attribute": "flavour" }, { "name": "Cascade", "amount": { "value": 37.5, "unit": "grams" }, "add": "end", "attribute": "flavour" }], "yeast": "Wyeast 1056 - American Ale™" }, "food_pairing": ["Spicy chicken tikka masala", "Grilled chicken quesadilla", "Caramel toffee cake"], "brewers_tips": "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.", "contributed_by": "Sam Mason <samjbmason>" }];

    service.getBeerById(id).subscribe((beer) => {
      expect(beer).toEqual(mockBeer);
    });

    const req = httpTestingController.expectOne(`https://api.punkapi.com/v2/beers/${id}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockBeer);
  });

  it('should retrieve paginated beers using getPaginatedBeers', () => {
    const itemsPerPage = 10;
    const currentPage = 1;
    const mockBeers: Beer[] = [{ "id": 1, "name": "Buzz", "tagline": "A Real Bitter Experience.", "first_brewed": "09/2007", "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.", "image_url": "https://images.punkapi.com/v2/keg.png", "abv": 4.5, "ibu": 60, "target_fg": 1010, "target_og": 1044, "ebc": 20, "srm": 10, "ph": 4.4, "attenuation_level": 75, "volume": { "value": 20, "unit": "litres" }, "boil_volume": { "value": 25, "unit": "litres" }, "method": { "mash_temp": [{ "temp": { "value": 64, "unit": "celsius" }, "duration": 75 }], "fermentation": { "temp": { "value": 19, "unit": "celsius" } }, "twist": null }, "ingredients": { "malt": [{ "name": "Maris Otter Extra Pale", "amount": { "value": 3.3, "unit": "kilograms" } }, { "name": "Caramalt", "amount": { "value": 0.2, "unit": "kilograms" } }, { "name": "Munich", "amount": { "value": 0.4, "unit": "kilograms" } }], "hops": [{ "name": "Fuggles", "amount": { "value": 25, "unit": "grams" }, "add": "start", "attribute": "bitter" }, { "name": "First Gold", "amount": { "value": 25, "unit": "grams" }, "add": "start", "attribute": "bitter" }, { "name": "Fuggles", "amount": { "value": 37.5, "unit": "grams" }, "add": "middle", "attribute": "flavour" }, { "name": "First Gold", "amount": { "value": 37.5, "unit": "grams" }, "add": "middle", "attribute": "flavour" }, { "name": "Cascade", "amount": { "value": 37.5, "unit": "grams" }, "add": "end", "attribute": "flavour" }], "yeast": "Wyeast 1056 - American Ale™" }, "food_pairing": ["Spicy chicken tikka masala", "Grilled chicken quesadilla", "Caramel toffee cake"], "brewers_tips": "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.", "contributed_by": "Sam Mason <samjbmason>" }];

    service.getPaginatedBeers(itemsPerPage, currentPage).subscribe((beers) => {
      expect(beers).toEqual(mockBeers);
    });

    const req = httpTestingController.expectOne(`https://api.punkapi.com/v2/beers?per_page=${itemsPerPage}&page=${currentPage}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockBeers);
  });
});