import { Component, OnInit } from '@angular/core';
import { Publication } from '../../../@core/models/publications.model';
import { PublicationsService } from '../../../@core/services/publications.service';

@Component({
  selector: 'app-my-publications',
  templateUrl: './my-publications.component.html',
  styleUrls: ['./my-publications.component.scss']
})
export class MyPublicationsComponent implements OnInit {
  
  myPublications:Array<Publication>;
  
  constructor(
    private publicationsService: PublicationsService) { 
    
    this.publicationsService.getPublicationsByUser().subscribe((resp: any) => {
      let result = resp['data'];
      this.myPublications = result;
    });
  }

  ngOnInit() {
  }

}
