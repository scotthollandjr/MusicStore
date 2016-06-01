import { Component, EventEmitter } from 'angular2/core';

@Component({
    selector: 'album-display',
    inputs: ['album'],
  template: `
    <h3>{{ album.title }}</h3>
  `
})
export class AlbumComponent {
  public album: Album;
}

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  directives: [AlbumComponent],
  template: `
  <album-display *ngFor="#currentAlbum of albumList"
    (click)="albumClicked(currentAlbum)"
    [class.selected]="currentAlbum === selectedAlbum"
    [album]="currentAlbum">
  </album-display>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    console.log('child', clickedAlbum);
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
}

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <div class="container">
      <h1>Music Store!</h1>
      <album-list
        [albumList]="albums"
        (onAlbumSelect)="albumWasSelected($event)">
      </album-list>
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
    console.log('parent', clickedAlbum);
  }
}

export class Album {
  public cart: boolean = false;
  constructor(public artist: string, public title: string, public genre: string, public price: number, public id: number) {

  }
}
