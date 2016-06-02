import { Component } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { CartPipe } from './cart.pipe';
//import { AlbumListComponent } from './album-list.component';

@Component({
  selector: 'cart-display',
  inputs: ['cartList'],
  pipes: [CartPipe],
  //directives: [AlbumComponent],
  template: `
    <h2>Cart</h2>
    <h3 *ngFor="#currentAlbum of cartList">
      {{ currentAlbum.title }} - {{ currentAlbum.artist }}
      \${{ currentAlbum.price }}
    </h3>
    <h3>Total Cost:</h3>
  `
})
export class CartDisplayComponent {

}
