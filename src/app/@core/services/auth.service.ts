import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:User;

  constructor() {
    const data = JSON.parse(localStorage.getItem('currentDataUser'));
    if (data){
      this.user = data;
    }
  }
}
