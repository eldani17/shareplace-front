import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'app/@core/services/publications.service';
import { Publication } from 'app/@core/models/publications.model';
import { PublicationImages } from 'app/@core/models/publication_images.model';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  publications:Array<Publication>;

  constructor(private publicationsService: PublicationsService) {
    this.publicationsService.getAllPublications().subscribe((resp: any) => {
      let result = resp['data'];
      this.publications = result;
    });
  }

  ngOnInit() {
    
  }

}
