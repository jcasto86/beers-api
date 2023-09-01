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
  /**
   * Beer id received from parent component
   */
  @Input() beerId?: string

  /**
   * Current favourite beer data for this component
   */
  beer?: Beer

  constructor(private punkService: PunkService) { }

  ngOnInit(): void {
    if (this.beerId)
      this.punkService.getBeerById(this.beerId)
        .pipe(tap(beer => this.beer = beer[0]))
        .subscribe()
  }
}
