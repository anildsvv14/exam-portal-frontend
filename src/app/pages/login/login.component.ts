import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { error } from 'console';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,
    MatButtonModule,MatSnackBarModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService:LoginService,private _snackBar: MatSnackBar){
   // this.getAllUser();
  }
  public user={
    username:'',
    password:'',
    
  };
  userLogin(){
    if(this.user.username=='' || this.user.username==null){
      this._snackBar.open("Username is required!!",'',{
        duration:3000
      });
      return;
    }
    else if(this.user.password=='' || this.user.password==null){
      this._snackBar.open("Password is required!!",'',{
        duration:3000
      });
      return;
    }

    this.loginService.login(this.user).subscribe(
      (response:any) => {
        console.log('Login Sucess:', response);


        this.loginService.loginUser(response.token);
        console.log("login user called");
        this.loginService.getCurrentUser().subscribe(
          (user1:any)=>{
            this.loginService.setUser(user1);
            console.log(user1);

            //check user is admin or normal user
            if(this.loginService.getUserRole()=="ADMIN"){
              window.location.href="/admin";
            }else if(this.loginService.getUserRole()=="NORMAL"){
              window.location.href="/user";
            }else{
              this.loginService.logout();
            }
            
          },
          (error)=>{
              console.log("something went wrong");
              this._snackBar.open("invalid details",'',{
                duration:3000
              });
          }
        );
        /*if(this.loginService.getUserRole()=='ADMIN'){
          window.location.href='/admin';
        }else if(this.loginService.getUserRole()=='NORMAL'){
          window.location.href='/user';
        }else{
          this.loginService.logout();
          
        }*/


        Swal.fire({
          title: 'Sucess!',
          text: 'User Logged in!! UserName is '+response.username,
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

  /*getAllUser(){
    this.userService.getUser().subscribe(
      (data)=>{
        console.log(data);
        alert("sucess");
      },(error)=>{
        console.log(error);
        alert("something went wrong");

      }
    );
  }*/
}
