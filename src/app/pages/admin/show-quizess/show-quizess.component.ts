import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { NgFor } from '@angular/common';
import { MatSnackBarModule,MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-show-quizess',
  standalone: true,
  imports: [MatListModule,MatCardModule,MatIconModule,RouterOutlet,
    RouterLink,RouterLinkActive,NgFor,MatButtonModule],
  templateUrl: './show-quizess.component.html',
  styleUrl: './show-quizess.component.css'
})
export class ShowQuizessComponent implements OnInit {

  constructor(private _quiz:QuizService,private _snakbar:MatSnackBar){

  }
  quizzes:any;
  ngOnInit(): void {
    this._quiz.getQuizzes().subscribe(
      (data)=>{
       // console.log(data);
       //this._snakbar.open("sucess");
        this.quizzes=data;
      },
      (error)=>{
        this._snakbar.open("something went wrong",'',{
          duration:3000
        });
      }
    );
  }
 

  deleteQuiz(qId:string){

    Swal.fire({
      icon:'question',
      text:'Are you sure want to delete',
      confirmButtonText:'Delete',
      confirmButtonColor:'red',
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        
        //delete start
        this._quiz.deleteQuiz(qId).subscribe(
          (data)=>{
            Swal.fire({
              title: 'Sucess!',
              text: 'Quiz deleted Sucessfully ',
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            this.quizzes=this.quizzes.filter((quiz:any)=>quiz.qId!=qId);
          },(error)=>{
            this._snakbar.open("Error deleting quiz",'',{
              duration:1000
            });
          }
        );

        //delete ends

      }else{
        
      }
    });



   
  }


}
