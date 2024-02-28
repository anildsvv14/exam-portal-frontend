import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
    
   }

  //for add new user
  public addUser(user:any){
    return this.http.post(`${baseUrl}/auth/register`,user);
  }

  //get user
  public getUser(){
    return this.http.get(`${baseUrl}/user/`);
  }

  //login user by username and password
  

  
}
