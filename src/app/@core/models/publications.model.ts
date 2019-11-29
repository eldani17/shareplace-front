import { User } from "./user.model";
import { PublicationImages } from "./publication_images.model";
import { ConditionPublications } from "./condition_publications.model";

export class Publication {
  id:number;
  title: string;
  description: string;
  state: string;
  user: User;
  images: Array<PublicationImages>;
  conditions: Array<string>;

  clear() {
    this.title = '';
    this.description = '';
    this.state = '';
    this.user = null;
    this.images = null;
    this.conditions = null;
  }
}