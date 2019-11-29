import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConditonsService {
  
  private endpointConditionsUrl: string;

  constructor(public http:HttpClient) {
    this.endpointConditionsUrl = environment.apiUrl + "/api/conditions";
  }

  getAllConditions() {
    return this.http.get(`${this.endpointConditionsUrl}`);
  }
}
