import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocStorageService {
  constructor() {}

  addLiked(id: string): void {
    const currentLikes: string[] | null = this.getLiked();
    if (!currentLikes) {
      localStorage.setItem('liked', JSON.stringify([id]));
    } else {
      if (this.isLiked(id)) {
        return;
      } else {
        currentLikes.push(id);
        localStorage.setItem('liked', JSON.stringify(currentLikes));
      }
    }
  }

  removeLiked(id: string): void {
    const currentLikes: string[] | null = this.getLiked();
    if (!currentLikes) {
      return;
    } else {
      const updatedLikes = currentLikes.filter((like) => like !== id);
      localStorage.setItem('liked', JSON.stringify(updatedLikes));
    }
  }

  getLiked(): string[] | null {
    const currentLikesJSON: string | null = localStorage.getItem('liked');
    if (!currentLikesJSON) {
      return null;
    } else {
      const parsedLikes: string[] = JSON.parse(currentLikesJSON);
      return parsedLikes;
    }
  }

  isLiked(id: string): boolean {
    const currentLikes: string[] | null = this.getLiked();
    if (!currentLikes) {
      return false;
    } else {
      const foundedLike = currentLikes.filter((like) => like === id);
      if (foundedLike.length === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
