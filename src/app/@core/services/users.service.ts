import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';
import { User } from './../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User;

  private endpointUsersUrl: string;

  constructor(
    public http:HttpClient,
    private router: Router,
  ) {
    this.endpointUsersUrl = environment.apiUrl + "/api/users";
    //this.user = JSON.parse(localStorage.getItem('currentDataUser'));
  }

  getAllUsers() {
    return this.http.get(`${this.endpointUsersUrl}`);
  }

  getUserById(id) {
    return this.http.get(`${this.endpointUsersUrl}/${id}`);
  }

  getUserBySearch(search) {
    let params = new HttpParams().set('busqueda', search);
    return this.http.get(`${this.endpointUsersUrl}/search`, { params: params });
  }

  login(dni, password){
    let formData: FormData = new FormData();
    formData.append("dni",dni);
    formData.append("password",password);

    return this.http.post(
      `${environment.apiUrl}/api/auth/login`, 
      formData);
  }

  register(user){
    let formData: FormData = new FormData();
    formData.append("dni",user.dni);
    formData.append("password",user.password);
    formData.append("name",user.name);
    formData.append("lastName",user.lastName);
    formData.append("email",user.email);
    formData.append("email_confirmation",user.email_confirmation);
    formData.append("password_confirmation",user.password_confirmation);

    return this.http.post(
      `${environment.apiUrl}/api/users`, 
      formData);
  }

  logOut(){
    //Agregar cuando usemos el localstorage
    //this.cleanUserData();
    // Go back to the home route
    //return this.router.navigate(['/visitante/iniciar-sesion']);
    localStorage.removeItem('currentDataUser');
    return;
  }
}
