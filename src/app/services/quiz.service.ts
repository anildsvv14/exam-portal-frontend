import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

   //show all quiz
   public getQuizzes(){
    return this._http.get(`${baseUrl}/quiz/`)
  }

  //add a new quiz
  public addQuiz(quiz:any){
    return this._http.post(`${baseUrl}/quiz/`,quiz);
  }

  //delete a quiz
  public deleteQuiz(qid:any){
    return this._http.delete(`${baseUrl}/quiz/${qid}`);
  }

  //get the single quiz
  public getQuiz(qId:any){
    return this._http.get(`${baseUrl}/quiz/${qId}`);

  }

//update a quiz by its id
public updateQuiz(quiz:any){
  return this._http.put(`${baseUrl}/quiz/`,quiz);
}
}
