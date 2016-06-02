import {Pipe, PipeTransform} from 'angular2/core';
import {Album} from './album.model';

@Pipe({
  name: "genre",
  pure: false
})
export class GenrePipe implements PipeTransform {
  transform(albumList: Album[], args) {
    var desiredGenre = args[0];
    console.log(desiredGenre);
    if (desiredGenre === "all") {
      return albumList;
    } else {
      return albumList.filter((album) => {
        if (album.genre === desiredGenre) {
          return true;
        }
      });
    }
  }
}
