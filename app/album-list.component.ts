import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { EditAlbumDetailsComponent } from './edit-album-details.component';
import { NewAlbumComponent } from './new-album.component';
import { CartPipe } from './cart.pipe';
import { CartDisplayComponent } from './cart-display.component';
import { GenreDisplayComponent } from './genre-display.component';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  pipes: [CartPipe],
  directives: [AlbumComponent, EditAlbumDetailsComponent, NewAlbumComponent, CartDisplayComponent, GenreDisplayComponent],
  template: `
  <div class="row">
    <div class="col-sm-8">
      <select (change)="onChange($event.target.value)">
        <option value="all" selected="selected">Show All</option>
        <option value="cart">Show Cart</option>
        <option value="notCart">Show Not Cart</option>
      </select>
      <album-display *ngFor="#currentAlbum of albumList | cart:filterCart"
        (click)="albumClicked(currentAlbum)"
        [class.selected]="currentAlbum === selectedAlbum"
        [album]="currentAlbum">
      </album-display>

      <select>
        <option *ngFor="#genre of allGenres" value="{{ genre }}">{{ genre }}</option>
      </select>

      <edit-album-details *ngIf="selectedAlbum" [album]="selectedAlbum">
      </edit-album-details>
      <new-album (onSubmitNewAlbum)="createAlbum($event)"></new-album>
    </div>

    <div class="col-sm-4">
      <cart-display [cartList]="albumList | cart:'cart'">

      </cart-display>
    </div>
  </div>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public allGenres: String[] = [];
  public onAlbumSelect: EventEmitter<Album>;
  public filterCart: string = "notCart";
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
    newAlbum.price = 10;
    this.albumList.push(newAlbum);
    //var currentGenre = newAlbum.genre
    if (this.allGenres.indexOf(newAlbum.genre) === -1) {
      this.allGenres.push(newAlbum.genre);
    }
  }
  onChange(filterOption) {
    this.filterCart = filterOption;
    console.log(this.filterCart);
  }

}
