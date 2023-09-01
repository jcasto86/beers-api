import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BeerFavouriteItemComponent } from './beer-favourite-item.component';
import { PunkService } from 'src/app/punk.service';
import { mockBeer } from 'src/app/mocks/beer.mock';

describe('BeerFavouriteItemComponent', () => {
  let component: BeerFavouriteItemComponent;
  let fixture: ComponentFixture<BeerFavouriteItemComponent>;
  let punkService: jasmine.SpyObj<PunkService>;

  beforeEach(() => {
    const punkServiceSpy = jasmine.createSpyObj('PunkService', ['getBeerById']);

    TestBed.configureTestingModule({
      declarations: [BeerFavouriteItemComponent],
      providers: [{ provide: PunkService, useValue: punkServiceSpy }],
    });

    fixture = TestBed.createComponent(BeerFavouriteItemComponent);
    component = fixture.componentInstance;
    punkService = TestBed.inject(PunkService) as jasmine.SpyObj<PunkService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and set beer data when beerId is provided', () => {
    const beerId = '123';
    const mockBeerData = [mockBeer];

    punkService.getBeerById.and.returnValue(of(mockBeerData));

    component.beerId = beerId;
    fixture.detectChanges();

    expect(punkService.getBeerById).toHaveBeenCalledWith(beerId);
    expect(component.beer).toEqual(mockBeerData[0]);
  });

  it('should not fetch beer data when beerId is not provided', () => {
    component.beerId = undefined;

    fixture.detectChanges();

    expect(punkService.getBeerById).not.toHaveBeenCalled();
    expect(component.beer).toBeUndefined();
  });
});