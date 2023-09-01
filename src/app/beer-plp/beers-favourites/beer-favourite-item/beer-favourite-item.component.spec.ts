import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerFavouriteItemComponent } from './beer-favourite-item.component';

describe('BeerFavouriteItemComponent', () => {
  let component: BeerFavouriteItemComponent;
  let fixture: ComponentFixture<BeerFavouriteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerFavouriteItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerFavouriteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
