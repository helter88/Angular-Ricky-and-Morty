import { Component, EventEmitter, Output } from '@angular/core';
import { InputSearchService } from 'src/app/services/input-search.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  selectedRadioValue: string = 'All';
  inputText: string = '';

  @Output() radioEmit = new EventEmitter<string>();

  constructor(private inputSearch: InputSearchService) {}

  onRadioChange() {
    return this.radioEmit.emit(this.selectedRadioValue);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.inputText.length > 0) {
      this.inputSearch.saveInputValue(this.inputText);
      this.inputText = '';
    }
  }

  onSearchClick() {
    this.inputSearch.saveInputValue(this.inputText);
    this.inputText = '';
  }
}
