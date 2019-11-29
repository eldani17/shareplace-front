export class Category {
  id:number;
  name: string;

  clear() {
    this.id = null;
    this.name = '';
  }
}