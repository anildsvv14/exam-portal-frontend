import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { CategoryService } from '../../../services/category.service';
import { error } from 'console';
@Component({
  selector: 'app-add-categories',
  standalone: true,
  imports: [MatCardModule,MatIconModule,
    RouterOutlet,RouterLink,RouterLinkActive,
    MatButtonModule,MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule,
    MatSnackBarModule],
  templateUrl: './add-categories.component.html',
  styleUrl: './add-categories.component.css'
})
export class AddCategoriesComponent implements OnInit {

  public category={
    title:'',
    description:''
  }
  constructor(private _snackBar: MatSnackBar,private _category:CategoryService){
  }
  
  ngOnInit(): void {
    
  }
  addCategory()
  {
    
    if(this.category.title=='' || this.category.title==null){
      this._snackBar.open("Title is required!!",'',{
        duration:3000
      });
      return;
    }
    else if(this.category.description=='' || this.category.description==null){
      this._snackBar.open("Category is required!!",'',{
        duration:3000
      });
      return;
    }
    this._category.addCategory(this.category).subscribe(
      (data:any)=>{
        Swal.fire({
          title: 'Sucess!',
          text: 'Category Added Sucessfully '+data.cid,
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        
      },
      (error)=>{
        this._snackBar.open("Something went wrong",'',{
          duration:3000
        });
        
      }

    );

  }

}
