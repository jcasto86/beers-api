import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerPlpComponent } from './beer-plp.component';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [CommonModule, FormsModule, AppRoutingModule, ReactiveFormsModule, RouterModule],
  declarations: [BeerPlpComponent, BeerCardComponent],
})
export class BeerPlpModule { }
