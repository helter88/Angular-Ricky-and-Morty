import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Character } from 'src/app/models/ricky-and-morty';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  characterArr: Character[] = [];
  likedCharacters: Character[] = [];

  @Input() radioValue: string | undefined;

  constructor(private characters: CharacterService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['radioValue'] && !changes['radioValue'].isFirstChange()) {
      this.characters.getLiked().subscribe((liked) => {
        console.log('getLiked from content ', liked);
        this.likedCharacters = liked;
      });
    }
  }

  ngOnInit(): void {
    this.characters.getCharacters().subscribe((val) => {
      this.characterArr = val;
    });
  }
}
