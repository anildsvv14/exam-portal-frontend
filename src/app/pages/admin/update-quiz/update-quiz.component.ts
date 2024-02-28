import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet,RouterLink,RouterLinkActive, ActivatedRoute} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { NgFor } from '@angular/common';
import Swal from 'sweetalert2';
import { CategoryService } from '../../../services/category.service';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-update-quiz',
  standalone: true,
  imports: [MatCardModule,MatIconModule,
            RouterOutlet,RouterLink,RouterLinkActive,
            MatButtonModule,MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule,
            MatSnackBarModule,MatSlideToggleModule,MatSelectModule,NgFor
          ],
  templateUrl: './update-quiz.component.html',
  styleUrl: './update-quiz.component.css'
})
export class UpdateQuizComponent implements OnInit{

  constructor(private _route:ActivatedRoute,private _quiz:QuizService,private _categories:CategoryService){

  }
  qId:number=0;
  quizData:any={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:null
  };
  categories:any;

  ngOnInit(): void {
    //get all categories
    this.getAllCategories();
    
    //get the single quiz
    
    this.qId=this._route.snapshot.params['qid'];
    this._quiz.getQuiz(this.qId).subscribe(
      (data)=>{
       this.quizData=data;
      
      },
      (error)=>{
        console.log("error");
      }
    );
  }

  //updating the quiz
updateQuiz(){
    this._quiz.updateQuiz(this.quizData).subscribe(
      (data)=>{
        Swal.fire({
          title: 'Sucess!',
          text: 'Quiz Updated Sucessfully ',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        
      },
      (error)=>{
        console.log("error updating data");
      }
    );
}

  //getting all the category
  getAllCategories(){
    this._categories.categories().subscribe(
      (data)=>{
        this.categories=data;
      },
      (error)=>{
        console.log("something went wrong");
      }
    );
  }
}
