import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) {
    //load the category
  }
  //show all category
    public categories(){
      return this._http.get(`${baseUrl}/category/`)
    }

  //add a new category
  public addCategory(category:object){
    return this._http.post(`${baseUrl}/category/`,category);
  }
  
}
