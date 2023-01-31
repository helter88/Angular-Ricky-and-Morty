import { Component, EventEmitter, Output } from '@angular/core';
import { SearchParamsService } from 'src/app/services/search-params.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  selectedRadioValue: string = 'All';
  inputText: string = '';

  @Output() radioEmit = new EventEmitter<string>();

  constructor(private searchParam: SearchParamsService) {}

  onRadioChange() {
    return this.radioEmit.emit(this.selectedRadioValue);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.inputText.length > 0) {
      this.searchParam.createSearchParam(this.inputText);
      this.inputText = '';
    }
  }

  onSearchClick() {
    this.searchParam.createSearchParam(this.inputText);
    this.inputText = '';
  }
}
