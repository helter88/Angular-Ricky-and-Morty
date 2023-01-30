import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  selectedRadioValue: string = 'All';

  @Output() radioEmit = new EventEmitter<string>();

  onRadioChange() {
    return this.radioEmit.emit(this.selectedRadioValue);
  }
}
