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
  beer$?: Observable<Beer[]>;

  constructor(
    private route: ActivatedRoute,
    private punkService: PunkService,
  ) { }

  ngOnInit(): void {
    this.handleRouteParam();
  }

  private handleRouteParam(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id && !isNaN(+id)) {
      this.beer$ = this.punkService.getBeerById(id);
    } else {
      console.log('ID is not a number or is not provided:', id);
    }
  }
}
