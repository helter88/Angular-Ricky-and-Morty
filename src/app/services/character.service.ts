import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character, Result, Root } from '../models/ricky-and-morty';
import { LocStorageService } from 'src/app/services/loc-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiKey = environment.apiKey;

  constructor(
    private http: HttpClient,
    private locService: LocStorageService
  ) {}

  getCharacters(): Observable<Character[]> {
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

  getLiked(): Observable<Character[] | []> {
    let likedArr: string[] | number[] | null = this.locService.getLiked();
    if (likedArr && likedArr.length !== 0) {
      likedArr = likedArr.map((id) => Number(id));
      return this.http
        .get<Result[]>(this.apiKey + `/${likedArr}`)
        .pipe(map((resp: Result[]) => this.transformLiked(resp)));
    } else {
      return of([]);
    }
  }

  transformLiked(data: Result[] | Result): Character[] {
    if (data instanceof Array) {
      return data?.map((resp) => {
        return {
          id: resp.id,
          name: resp.name,
          image: resp.image,
        };
      });
    } else {
      return [
        {
          id: data.id,
          name: data.name,
          image: data.image,
        },
      ];
    }
  }

  getSearched(name: string) {
    return this.http.get<Root>(this.apiKey + `/?name=${name}`).pipe(
      map((resp: Root) => this.transformData(resp)),
      map((resp) => resp.slice(0, 10))
    );
  }
}
