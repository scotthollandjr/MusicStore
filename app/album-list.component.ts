import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { EditAlbumDetailsComponent } from './edit-album-details.component';
import { NewAlbumComponent } from './new-album.component';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  directives: [AlbumComponent, EditAlbumDetailsComponent, NewAlbumComponent],
  template: `
  <album-display *ngFor="#currentAlbum of albumList"
    (click)="albumClicked(currentAlbum)"
    [class.selected]="currentAlbum === selectedAlbum"
    [album]="currentAlbum">
  </album-display>
  <edit-album-details *ngIf="selectedAlbum" [album]="selectedAlbum">
  </edit-album-details>
  <new-album (onSubmitNewAlbum)="createAlbum($event)"></new-album>
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
  createAlbum(newAlbum: Album): void {
    newAlbum.id = this.albumList.length;
    this.albumList.push(newAlbum);
  }
}
