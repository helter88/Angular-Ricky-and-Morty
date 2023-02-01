import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InputSearchService {
  private inputVal = new BehaviorSubject<string | null>(null);

  constructor() {}

  saveInputValue(val: string) {
    this.inputVal.next(val);
  }

  getInputValue() {
    return this.inputVal;
  }
}
