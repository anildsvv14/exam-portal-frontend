import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
  
})

export class LoginService {
  
  
  constructor(private http:HttpClient) {
    
   }

  //login user by username and password
  public login(user:any){
    return this.http.post(`${baseUrl}/auth/login`,user);
  }

  //get the current user details from backend
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/auth/current-user`);
    //return this.http.get(`${baseUrl}/auth/anildsvv16`);
  }

  //login:user set the token in local storage
  public loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }

//check user is login or not
public isLoggedIn(){
  let tokenStr=localStorage.getItem("token");
  if(tokenStr==undefined || tokenStr==''|| tokenStr==null){
    return false;
  }
  else{
    return true;
  }
}
  //logout :remove token from local storage

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
}

//get token
public getToken(){
  return localStorage.getItem('token');
}

//set userdetails

public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user));
}

//get user
public getUser(){
  let userStr=localStorage.getItem('user');
  if(userStr!=null){
    return JSON.parse(userStr);
  }else{
    this.logout();
    return null;
  }
}
//get the user role
public getUserRole(){
  let user=this.getUser();
  return user.authorities[0].authority;
}



}
