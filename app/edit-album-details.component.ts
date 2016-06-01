import {Component} from 'angular2/core';
import {Album} from './album.model';

@Component({
  selector: 'edit-album-details',
  inputs: ['album'],
  template: `
    <div class="album-form">
      <h3>Edit Description</h3>
      <h4>Album Title:</h4>
      <input [(ngModel)]="album.title" class="col-sm-8 input-lg"/>
      <h4>Artist:</h4>
      <input [(ngModel)]="album.artist" class="col-sm-8 input-lg"/>
      <h4>Genre:</h4>
      <input [(ngModel)]="album.genre" class="col-sm-8 input-lg"/>
    </div>
  `
})
export class EditAlbumDetailsComponent {
  public album: Album;
}
