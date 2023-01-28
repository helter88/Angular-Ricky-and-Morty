import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Result } from 'src/app/models/ricky-and-morty';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  characterArr: Result[] = [];
  constructor(private characters: CharacterService) {}

  ngOnInit(): void {
    this.characters.getCharacter().subscribe((val) => {
      this.characterArr = val;
    });
  }
}
