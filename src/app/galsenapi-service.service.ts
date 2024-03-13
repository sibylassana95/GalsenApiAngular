import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from './model/region.model';
import { Departement } from './model/departement.model';
import { Village } from './model/village.model';
@Injectable({
  providedIn: 'root',
})
export class GalsenapiServiceService {
  private apiUrl = 'https://galsenapi.pythonanywhere.com/api';

  constructor(private http: HttpClient) {}

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.apiUrl + '/regions/');
  }

  getDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(this.apiUrl + '/departements/');
  }
  getVillages(): Observable<Village[]> {
    return this.http.get<Village[]>(this.apiUrl + '/villages/');
  }
}
