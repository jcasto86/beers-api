import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Beer } from './models/beer-data.model';

@Injectable({
  providedIn: 'root',
})
export class PunkService {
  private baseApiUrl = 'https://api.punkapi.com/v2/beers';

  constructor(public http: HttpClient) { }

  getAllBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.baseApiUrl}?per_page=80`);
  }

  getBeerById(id: string): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.baseApiUrl}/${id}`);
  }

  getPaginatedBeers(
    itemsPerPage: number,
    currentPage: number
  ): Observable<Beer[]> {
    const params = new HttpParams()
      .set('per_page', itemsPerPage.toString())
      .set('page', currentPage.toString());

    return this.http.get<Beer[]>(this.baseApiUrl, { params });
  }
}
