import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerPlpComponent } from './beer-plp.component';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { BeersFavouritesComponent } from './beers-favourites/beers-favourites.component';
import { BeerFavouriteItemComponent } from './beers-favourites/beer-favourite-item/beer-favourite-item.component';


@NgModule({
  imports: [CommonModule, FormsModule, AppRoutingModule, ReactiveFormsModule, RouterModule],
  declarations: [BeerPlpComponent, BeerCardComponent, BeersFavouritesComponent, BeerFavouriteItemComponent],
})
export class BeerPlpModule { }
