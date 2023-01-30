import { Component } from '@angular/core';

@Component({
  selector: 'app-star-svg',
  templateUrl: './star-svg.component.svg',
  styleUrls: ['./star-svg.component.css'],
})
export class StarSvgComponent {
  fillColor = 'transparent';

  changeColor() {
    this.fillColor = `#ffd401`;
  }
}
