import { PublicationImages } from "../../models/publication_images.model";

export class Step1 {
    title: string = '';
    category : string = '';
}

export class Step2 {
  description: string = '';
  images: Array<PublicationImages> = null;
}