import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Ricky-and-Morty';
  radioData: string | undefined;

  handleRadioEmit(data: string) {
    this.radioData = data;
  }
}
