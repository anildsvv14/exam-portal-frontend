import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
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
  selector: 'app-add-quiz',
  standalone: true,
  imports: [MatCardModule,MatIconModule,
    RouterOutlet,RouterLink,RouterLinkActive,
    MatButtonModule,MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule,
    MatSnackBarModule,MatSlideToggleModule,MatSelectModule,NgFor],
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.css'
})
export class AddQuizComponent implements OnInit {
  constructor(private _categories:CategoryService,private _quiz:QuizService,private _snackBar:MatSnackBar){

  }
  categories:any;
  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:null
  };
  ngOnInit(): void {
    this._categories.categories().subscribe(
      (data)=>{
        this.categories=data;
      },
      (error)=>{
        console.log("something went wrong");
      }
    );
  }
  addQuiz(){
    if(this.quizData.category=='' || this.quizData.category==null){
      
      this._snackBar.open("Quiz category is required!!",'',{
        duration:3000
      });
      return;
    }
    

    this._quiz.addQuiz(this.quizData).subscribe(
      (data)=>{
         
        Swal.fire({
          title: 'Sucess!',
          text: 'Quiz Added Sucessfully ',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      },
      (error)=>{
        this._snackBar.open("Something went wrong in adding QUIZ!!",'',{
          duration:3000
        });
      }
      );
  }

}
