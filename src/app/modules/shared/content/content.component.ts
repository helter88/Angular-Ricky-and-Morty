import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/ricky-and-morty';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  characterArr: Character[] = [];
  constructor(private characters: CharacterService) {}

  ngOnInit(): void {
    this.characters.getCharacter().subscribe((val) => {
      console.log(val);
      this.characterArr = val;
    });
  }
}
