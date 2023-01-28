import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character, Result, Root } from '../models/ricky-and-morty';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getCharacter(): Observable<Character[]> {
    return this.http.get<Root>(this.apiKey).pipe(
      map((resp: Root) => this.transformData(resp)),
      map((resp) => resp.slice(0, 10))
    );
  }
  transformData(data: Root): Character[] {
    return data.results.map((resp) => {
      return {
        id: resp.id,
        name: resp.name,
        image: resp.image,
      };
    });
  }
}
