import { Component } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { CartPipe } from './cart.pipe';
import { GenrePipe } from './genre.pipe';
//import { AlbumListComponent } from './album-list.component';

@Component({
  selector: 'genre-display',
  inputs: ['genreList'],
  pipes: [CartPipe],
  //directives: [AlbumComponent],
  template: `
    <select >

      <option value=currentAlbum.genre>currentAlbum.genre</option>

    </select>
  `
})
export class GenreDisplayComponent {

}
