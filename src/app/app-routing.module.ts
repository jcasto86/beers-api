import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerPdpComponent } from './beer-pdp/beer-pdp.component';
import { BeerPlpComponent } from './beer-plp/beer-plp.component';
import { BeersFavouritesComponent } from './beer-plp/beers-favourites/beers-favourites.component';

const routes: Routes = [
  { path: '', component: BeerPlpComponent },
  { path: 'product/:id', component: BeerPdpComponent },
  { path: 'my-top-beers', component: BeersFavouritesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }