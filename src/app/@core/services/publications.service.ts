import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Publication } from '../models/publications.model';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  private endpointPublicationsUrl: string;

  constructor(public http:HttpClient) {
    this.endpointPublicationsUrl = environment.apiUrl + "/api/publications";
  }

  getAllPublications() {
    return this.http.get(`${this.endpointPublicationsUrl}`);
  }

  getPublicationsByUser() {
    return this.http.get(environment.apiUrl + '/api/users/1/publications');
  }

  createPublication(publication:Publication){
    console.log("prubli", publication);
    let formData: FormData = new FormData();
    //formData.append("user_id",publication.user.id.toString());
    formData.append("user_id","1");
    formData.append("description",publication.description);
    formData.append("title",publication.title);
    formData.append("images[0]","imagen 1");
    formData.append("images[1]","imagen 2");
    formData.append("images[2]","imagen 3");
    
    for (let i = 0; i < publication.conditions.length; i++) {
      formData.append("conditions[" + i + "]",publication.conditions[i]);
    }
    /*formData.append("conditions[0]","condicion 0");
    formData.append("conditions[1]","condicion 1");
    formData.append("conditions[2]","condicion 2");*/

    return this.http.post(
      this.endpointPublicationsUrl, 
      formData);
  }
}
