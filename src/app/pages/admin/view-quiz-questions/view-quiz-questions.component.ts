import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-view-quiz-questions',
  standalone: true,
  imports: [],
  templateUrl: './view-quiz-questions.component.html',
  styleUrl: './view-quiz-questions.component.css'
})
export class ViewQuizQuestionsComponent implements OnInit {
  
  qid:number=0;
  qTitle:string='';
  constructor(private _route:ActivatedRoute,private _question:QuestionService){

  }
  ngOnInit(): void {
    this.qid=this._route.snapshot.params['qid'];
    this.qTitle=this._route.snapshot.params['title'];
    console.log(this.qid);
    console.log(this.qTitle);
    this._question.getAllQuestionOfQuiz(this.qid);

  }

}
