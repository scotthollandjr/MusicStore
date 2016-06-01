import {Pipe, PipeTransform} from 'angular2/core';
import {Album} from './album.model';

@Pipe({
  name: "cart",
  pure: false
})
export class CartPipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredCartState = args[0];
    if(desiredCartState === "cart") {
      return input.filter((album) => {
        return album.cart;
      });
    } else if (desiredCartState === "notCart") {
      return input.filter((album) => {
        return !album.cart;
      });
    } else {
      return input;
    }
  }
}
