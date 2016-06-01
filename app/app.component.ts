import { Component } from 'angular2/core';

export class Album {
  public cart: boolean = false;
  constructor(public artist: string, public title: string, public genre: string, public price: number, public id: number) {

  }
}
@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  template: `
  <h3 *ngFor="#currentAlbum of albumList" (click)="albumClicked(currentAlbum)">
    {{ currentAlbum.title }}
  </h3>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  albumClicked(clickedAlbum: Album): void {
    console.log(clickedAlbum);
  }
}

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
  <div class="container">
    <h1>Music Store!</h1>
    <album-list [albumList]="albums"></album-list>
  </div>
  `
})
export class AppComponent {
  public albums: Album[];
  constructor() {
    this.albums = [
      new Album("Radiohead", "In Rainbows", "Alternative", 24.99, 0),
      new Album("Beach House", "Thank Your Lucky Stars", "Shoegaze", 19.99, 1)
    ];
  }
  albumWasSelected(clickedAlbum: Album): void {
    console.log(clickedAlbum);
  }
}
