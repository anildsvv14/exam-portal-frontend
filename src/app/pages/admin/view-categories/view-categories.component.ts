import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import { NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { CategoryService } from '../../../services/category.service';
import { error } from 'console';

@Component({
  selector: 'app-view-categories',
  standalone: true,
  imports: [MatListModule,MatCardModule,MatIconModule,
    RouterOutlet,RouterLink,RouterLinkActive,NgFor,MatTableModule,
    MatButtonModule],
  templateUrl: './view-categories.component.html',
  styleUrl: './view-categories.component.css'
})
export class ViewCategoriesComponent implements OnInit{

  constructor(private _category:CategoryService){

  }
  ngOnInit(): void {
    this._category.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.log("sucess");
      },
      (error)=>{
        console.log("error")
      }
    );
  }

  categories:any;
}
