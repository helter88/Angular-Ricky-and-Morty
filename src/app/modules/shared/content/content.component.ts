import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/ricky-and-morty';
import { CharacterService } from 'src/app/services/character.service';
import { LocStorageService } from 'src/app/services/loc-storage.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  characterArr: Character[] = [];
  private likedArr: string[] | null | undefined;
  likedCharacters: Character[] = [];

  @Input() radioValue: string | undefined;

  constructor(
    private characters: CharacterService,
    private locService: LocStorageService
  ) {}

  ngOnInit(): void {
    this.characters.getCharacters().subscribe((val) => {
      this.characterArr = val;
    });
    this.likedArr = this.locService.getLiked();
    if (this.likedArr) {
      this.characters.getLiked(this.likedArr).subscribe((liked) => {
        this.likedCharacters = liked;
      });
    }
  }
}
