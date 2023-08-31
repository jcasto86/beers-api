import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerPlpComponent } from './beer-plp.component';
import { PunkService } from '../punk.service';
import { of } from 'rxjs';
import { Beer } from '../models/beer-data.model';

describe('BeerPlpComponent', () => {
  let component: BeerPlpComponent;
  let fixture: ComponentFixture<BeerPlpComponent>;
  let mockPunkService: Partial<PunkService>;

  beforeEach(() => {
    mockPunkService = {
      getPaginatedBeers: jasmine.createSpy('getPaginatedBeers').and.returnValue(of([])),
      getAllBeers: jasmine.createSpy('getAllBeers').and.returnValue(of([]))
    };

    TestBed.configureTestingModule({
      declarations: [BeerPlpComponent],
      providers: [
        { provide: PunkService, useValue: mockPunkService }
      ]
    });

    fixture = TestBed.createComponent(BeerPlpComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadBeers on ngOnInit', () => {
    spyOn(component, 'loadBeers');
    component.ngOnInit();
    expect(component.loadBeers).toHaveBeenCalled();
  });

  it('should call loadBeers when searchBeer is called with empty query', () => {
    spyOn(component, 'loadBeers');
    component.searchBeer('');
    expect(component.loadBeers).toHaveBeenCalled();
  });
});