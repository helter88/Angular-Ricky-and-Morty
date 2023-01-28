import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result, Root } from '../models/ricky-and-morty';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getCharacter(): Observable<Result[]> {
    return this.http.get<Root>(this.apiKey).pipe(
      switchMap((resp) => {
        return of(resp.results.slice(0, 10));
      })
    );
  }
}
