import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailService {

  user:User;

  constructor() { }

  setProfileDetail(user:User){
    this.user = user;
  }
}
