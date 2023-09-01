import { Component, Input, OnInit } from '@angular/core';
import { PunkService } from 'src/app/punk.service';
import { Beer } from '../../../models/beer-data.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-beer-favourite-item',
  templateUrl: './beer-favourite-item.component.html',
  styleUrls: ['./beer-favourite-item.component.scss']
})
export class BeerFavouriteItemComponent implements OnInit {

  @Input() beerId?: string

  beer?: Beer

  constructor(private punkService: PunkService) { }

  ngOnInit(): void {

    if (this.beerId)
      this.punkService.getBeerById(this.beerId)
        .pipe(tap(beer => this.beer = beer[0]))
        .subscribe()
  }
}
