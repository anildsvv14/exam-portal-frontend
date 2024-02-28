import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }

  //getting the total question of the quiz
  public getAllQuestionOfQuiz(qId:any){
    this._http.get(`${baseUrl}/question/quiz/${qId}`);
  }
}
