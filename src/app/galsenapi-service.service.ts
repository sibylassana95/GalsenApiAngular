import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from './model/region.model';
; 

@Injectable({
  providedIn: 'root'
})
export class GalsenapiServiceService {
  private apiUrl = 'https://galsenapi.pythonanywhere.com/api/regions/';

  constructor(private http: HttpClient) { }

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.apiUrl);
  }
  getRegions(searchTerm: string = ''): Observable<Region[]> {
  return this.http.get<Region[]>(`${this.apiUrl}`).pipe(
    map(regions => regions.filter(region => region.departments.some(dept => dept.includes(searchTerm))))
  );
}
}
