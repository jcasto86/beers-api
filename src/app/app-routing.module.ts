import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerPdpComponent } from './beer-pdp/beer-pdp.component';
import { BeerPlpComponent } from './beer-plp/beer-plp.component';

const routes: Routes = [
  { path: '', component: BeerPlpComponent },
  { path: 'product/:id', component: BeerPdpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }