import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {MatCardModule} from '@angular/material/card';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatSnackBarModule,
    MatButtonModule,FormsModule,ReactiveFormsModule,MatCardModule
  ],
 
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  constructor(private userService:UserService,private _snackBar: MatSnackBar){
  }

  ngOnInit() {
    
  }

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  };
  
  
  

  registerUser() {

    if(this.user.username=='' || this.user.username==null){
      this._snackBar.open("Username is required!!",'',{
        duration:3000
      });
      return;
    }


    this.userService.addUser(this.user).subscribe(
      (response:any) => {
        console.log('User added successfully:', response);
        Swal.fire({
          title: 'Sucess!',
          text: 'User Registered!! UserName is '+response.username,
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        
      },
      (error) => {
        console.log('Error adding user:', error);
     
        Swal.fire({
          title: 'Error!',
          text: 'Something Went Wrong!!',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    );
  }


}
