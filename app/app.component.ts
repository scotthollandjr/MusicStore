import { Component, EventEmitter } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

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
