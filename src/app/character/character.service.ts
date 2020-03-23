import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(): Observable<any> {
    return this.http.get<any>('https://swapi.co/api/people');
  }
  getMeals(): Observable<any> {
    return this.http.get<any>('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
  }
}
