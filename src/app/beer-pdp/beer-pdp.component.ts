import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from '../models/beer-data.model';
import { Observable } from 'rxjs';
import { PunkService } from '../punk.service';

@Component({
  selector: 'app-beer-pdp',
  templateUrl: './beer-pdp.component.html',
  styleUrls: ['./beer-pdp.component.scss'],
})
export class BeerPdpComponent implements OnInit {
  /**
   * Beers observable data.
   */
  beer$?: Observable<Beer[]>;

  constructor(
    private route: ActivatedRoute,
    private punkService: PunkService,
  ) { }

  ngOnInit(): void {
    this.handleRouteParam();
  }

  /**
   * Handles the route parameter id and fetches the beer data if a valid ID is provided.
   * If id is not a valid number or is not provided, it logs a message to the console.
   */
  private handleRouteParam(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id && !isNaN(+id)) {
      this.beer$ = this.punkService.getBeerById(id);
    } else {
      console.log('ID is not a number or is not provided:', id);
    }
  }
}
