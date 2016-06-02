import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
    selector: 'album-display',
    inputs: ['album'],
  template: `
  <div>
    <input *ngIf="album.cart" type="checkbox" checked (click)="toggleCart(false)"/>
    <input *ngIf="!album.cart" type="checkbox" (click)="toggleCart(true)"/>
    <label>{{ album.artist }} - {{ album.title }}: \${{ album.price }}</label>
  </div>
  `
})
export class AlbumComponent {
  public album: Album;
  toggleCart(setState: boolean) {
    this.album.cart = setState;
  }
}
