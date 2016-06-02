import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'new-album',
  outputs: ['onSubmitNewAlbum'],
  template: `
    <div class="task-form">
      <h3>Add New Band:</h3>
      <input placeholder="Title" class="col-sm-8 input-lg" #newTitle>
      <input placeholder="Artist" class="col-sm-8 input-lg" #newArtist>
      <input placeholder="Genre" class="col-sm-8 input-lg" #newGenre>
      <button (click)="addAlbum(newTitle, newArtist, newGenre)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewAlbumComponent {
  public onSubmitNewAlbum: EventEmitter<Album>;
  constructor(){
    this.onSubmitNewAlbum = new EventEmitter();
  }
  addAlbum(userTitle: HTMLInputElement, userArtist: HTMLInputElement, userGenre: HTMLInputElement) {
    var newAlbum = new Album(userArtist.value, userTitle.value, userGenre.value, 10, 0);
    this.onSubmitNewAlbum.emit(newAlbum);
    userTitle.value = "";
    userArtist.value = "";
    userGenre.value = "";
  }
}
