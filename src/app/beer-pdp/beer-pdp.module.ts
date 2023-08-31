import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerPdpComponent } from './beer-pdp.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BeerPdpComponent],
})
export class BeerPdpModule { }
