import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchParamsService {
  constructor(private router: Router) {}

  private SubjectData = new BehaviorSubject<string | null>(null);

  createSearchParam(text: string) {
    this.router.navigate(['/'], {
      queryParams: { search: text.toLowerCase() },
    });
    this.SubjectData.next(text.toLowerCase());
  }

  getSearch() {
    return this.SubjectData;
  }
}
