import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Character } from 'src/app/models/ricky-and-morty';
import { CharacterService } from 'src/app/services/character.service';
import { InputSearchService } from 'src/app/services/input-search.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  characterArr: Character[] = [];
  likedCharacters: Character[] = [];
  inputCharacterName: string | null | undefined;
  searchedCharacters: Character[] = [];
  noCharacterFoundMessage: string | undefined;

  @Input() radioValue: string | undefined;

  constructor(
    private characters: CharacterService,
    private inputSearch: InputSearchService
  ) {}

  handleBackToAll(): void {
    this.inputCharacterName = null;
    this.searchedCharacters = [];
    this.noCharacterFoundMessage = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['radioValue'] && !changes['radioValue'].isFirstChange()) {
      this.characters.getLiked().subscribe((liked) => {
        this.likedCharacters = liked;
      });
    }
  }

  ngOnInit(): void {
    this.characters.getCharacters().subscribe((val) => {
      this.characterArr = val;
    });

    this.inputSearch.getInputValue().subscribe((val) => {
      this.inputCharacterName = val;
      if (val !== null) {
        this.characters.getSearched(val).subscribe(
          (character) => {
            this.searchedCharacters = character;
          },
          (err) => {
            this.noCharacterFoundMessage = err.error.error;
          }
        );
      }
    });
  }
}
