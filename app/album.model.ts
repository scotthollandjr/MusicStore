export class Album {
  public cart: boolean = false;
  constructor(public artist: string, public title: string, public genre: string, public price: number, public id: number) {

  }
}
