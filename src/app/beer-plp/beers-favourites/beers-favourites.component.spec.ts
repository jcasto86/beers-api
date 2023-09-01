import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersFavouritesComponent } from './beers-favourites.component';

describe('BeersFavouritesComponent', () => {
  let component: BeersFavouritesComponent;
  let fixture: ComponentFixture<BeersFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeersFavouritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
