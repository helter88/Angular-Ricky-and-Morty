import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/ricky-and-morty';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() character: Character | undefined;

  constructor() {}
}
