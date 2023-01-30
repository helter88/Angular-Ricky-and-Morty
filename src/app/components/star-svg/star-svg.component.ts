import { Component, Input, OnInit } from '@angular/core';
import { LocStorageService } from 'src/app/services/loc-storage.service';

@Component({
  selector: 'app-star-svg',
  templateUrl: './star-svg.component.svg',
  styleUrls: ['./star-svg.component.css'],
})
export class StarSvgComponent implements OnInit {
  likeStatus: boolean | undefined;
  @Input() cardId: string | undefined;
  fillColor = 'transparent';

  constructor(private locStorage: LocStorageService) {}

  changeColor() {
    if (this.cardId) {
      if (this.likeStatus) {
        this.fillColor = `transparent`;
        this.locStorage.removeLiked(this.cardId);
        this.likeStatus = this.locStorage.isLiked(this.cardId);
      } else {
        this.fillColor = `#ffd401`;
        this.locStorage.addLiked(this.cardId);
        this.likeStatus = this.locStorage.isLiked(this.cardId);
      }
    }
  }

  ngOnInit(): void {
    if (this.cardId) {
      this.likeStatus = this.locStorage.isLiked(this.cardId);
      this.fillColor = this.likeStatus ? `#ffd401` : 'transparent';
    }
  }
}
